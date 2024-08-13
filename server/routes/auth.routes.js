// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User.model");
// const { isAuthenticated } = require("./../middleware/jwt.middleware.js"); // <== IMPORT

// const router = express.Router();
// const saltRounds = 10;

// // Ruta para el registro de nuevos usuarios
// router.post("/register", async (req, res) => {
//   const { name, email, password} = req.body;

//   try {
//     // Verificar si el usuario ya existe
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: "El usuario ya existe" });
//     }

//     // Crear un nuevo usuario
//     user = new User({
//       name,
//       email,
//       password,
//       role,
//     });

//     // Hashear la contraseña antes de guardarla en la base de datos
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     // Guardar el usuario en la base de datos
//     await user.save();

//     // Crear y firmar un token JWT
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Error en el servidor");
//   }
// });

// router.post("/login", (req, res, next) => {
//   const { email, password } = req.body;

//   // Check if email or password are provided as empty string
//   if (email === "" || password === "") {
//     res.status(400).json({ message: "Provide email and password." });
//     return;
//   }

//   // Check the users collection if a user with the same email exists
//   User.findOne({ email })
//     .then((foundUser) => {
//       if (!foundUser) {
//         // If the user is not found, send an error response
//         res.status(401).json({ message: "User not found." });
//         return;
//       }

//       // Compare the provided password with the one saved in the database
//       const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

//       if (passwordCorrect) {
//         // Deconstruct the user object to omit the password
//         const { _id, email, name } = foundUser;

//         // Create an object that will be set as the token payload
//         const payload = { _id, email, name };

//         // Create and sign the token
//         const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
//           algorithm: "HS256",
//           expiresIn: "6h",
//         });

//         // Send the token as the response
//         res.status(200).json({ authToken: authToken });
//       } else {
//         res.status(401).json({ message: "Unable to authenticate the user" });
//       }
//     })
//     .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
// });

// // GET  /auth/verify  -  Used to verify JWT stored on the client
// router.get("/verify", isAuthenticated, (req, res, next) => {
//   console.log(`req.payload`, req.payload);

//   res.status(200).json(req.payload);
// });

// module.exports = router;
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const { isAuthenticated } = require("./../middleware/jwt.middleware.js");

const router = express.Router();
const saltRounds = 10;

router.post("/signup", async (req, res, next) => {
  const { email, password, name } = req.body;
  if (email === "" || password === "" || name === "") {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: "Provide a valid email address." });
    return;
  }
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({
      message:
        "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(400).json({ message: "User already exists." });
      return;
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const createdUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });
    res.status(201).json({ created: true });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  // Check if email or password are provided as empty string
  if (email === "" || password === "") {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  // Check the users collection if a user with the same email exists
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        // If the user is not found, send an error response
        res.status(401).json({ message: "User not found." });
        return;
      }

      // Compare the provided password with the one saved in the database
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

      if (passwordCorrect) {
        // Deconstruct the user object to omit the password
        const { _id, email, name } = foundUser;

        // Create an object that will be set as the token payload
        const payload = { _id, email, name };

        // Create and sign the token
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });

        // Send the token as the response
        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

// GET  /auth/verify  -  Used to verify JWT stored on the client
router.get("/verify", isAuthenticated, (req, res, next) => {
  // If JWT token is valid the payload gets decoded by the
  // isAuthenticated middleware and made available on `req.payload`
  console.log(`req.payload`, req.payload);

  // Send back the object with user data
  // previously set as the token payload
  res.status(200).json(req.payload);
});

module.exports = router;
