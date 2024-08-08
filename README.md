<style>
    table * {
    text-align: center;
    border: 1px solid black;
    }
</style>
<table>
  <thead>
    <tr style="text-align: center;">
      <th colspan="6">Request</th>
      <th colspan="4">Response</th>
    </tr>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Headers</th>
      <th>Body</th>
      <th>Params</th>
      <th>Query</th>
      <th>Status</th>
      <th>Headers</th>
      <th>Body</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/users</td>
      <td>-</td>
      <td>{ email, password, name, address, phone, date_of_birth, role }</td>
      <td>-</td>
      <td>-</td>
      <td>201</td>
      <td>-</td>
      <td>{...}</td>
      <td>Create a new user</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/users</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>[{...}]</td>
      <td>Get all users</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/users/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Get user by ID</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/users/:id</td>
      <td>-</td>
      <td>{ email, password, name, address, phone, date_of_birth, role }</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Update user by ID</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/users/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{ message: "User deleted successfully" }</td>
      <td>Delete user by ID</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/adopt</td>
      <td>-</td>
      <td>{ adopter, animal, adoption_date }</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Create a new adoption</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/animals</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>[{...}]</td>
      <td>Get all animals</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/animals/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Get animal by ID</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/register</td>
      <td>-</td>
      <td>{ name, email, password, role }</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{ token }</td>
      <td>Register a new user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td>-</td>
      <td>{ email, password }</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{ token }</td>
      <td>Login an existing user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/donations</td>
      <td>-</td>
      <td>{ donor, donor_name, amount, donation_date, donor_contact, purpose }</td>
      <td>-</td>
      <td>-</td>
      <td>201</td>
      <td>-</td>
      <td>{...}</td>
      <td>Create a new donation</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/donations</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>[{...}]</td>
      <td>Get all donations</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/donations/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Get donation by ID</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/medical-records</td>
      <td>-</td>
      <td>{ animal, visit_date, diagnosis, treatment, medication, veterinarian_name }</td>
      <td>-</td>
      <td>-</td>
      <td>201</td>
      <td>-</td>
      <td>{...}</td>
      <td>Create a new medical record</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/medical-records</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>[{...}]</td>
      <td>Get all medical records</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/medical-records/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Get medical record by ID</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/medical-records/:id</td>
      <td>-</td>
      <td>{ animal, visit_date, diagnosis, treatment, medication, veterinarian_name }</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Update medical record by ID</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/medical-records/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{ message: "Medical record deleted successfully" }</td>
      <td>Delete medical record by ID</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/visits</td>
      <td>-</td>
      <td>{ animal, visitor, visit_date, reason, notes }</td>
      <td>-</td>
      <td>-</td>
      <td>201</td>
      <td>-</td>
      <td>{...}</td>
      <td>Create a new visit</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/visits</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>[{...}]</td>
      <td>Get all visits</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/visits/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Get visit by ID</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/visits/:id</td>
      <td>-</td>
      <td>{ animal, visitor, visit_date, reason, notes }</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Update visit by ID</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/visits/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{ message: "Visit deleted successfully" }</td>
      <td>Delete visit by ID</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/volunteers</td>
      <td>-</td>
      <td>{ volunteer, availability, assigned_task }</td>
      <td>-</td>
      <td>-</td>
      <td>201</td>
      <td>-</td>
      <td>{...}</td>
      <td>Create a new volunteer</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/volunteers</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>[{...}]</td>
      <td>Get all volunteers</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/volunteers/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Get volunteer by ID</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/volunteers/:id</td>
      <td>-</td>
      <td>{ volunteer, availability, assigned_task }</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{...}</td>
      <td>Update volunteer by ID</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/volunteers/:id</td>
      <td>-</td>
      <td>-</td>
      <td>{ id }</td>
      <td>-</td>
      <td>200</td>
      <td>-</td>
      <td>{ message: "Volunteer deleted successfully" }</td>
      <td>Delete volunteer by ID</td>
    </tr>
  </tbody>
</table>
