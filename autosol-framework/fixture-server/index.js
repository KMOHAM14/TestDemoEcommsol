const express = require('express');

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Route to handle the POST request
app.post('/form-data', (req, res) => {
  // Access the form data from req.body
  const formData = req.body;

  console.log('Headers', req.headers);

  // Log the form data to the console
  console.log('Received form data:', formData);

  // Set a cookie
  res.cookie('ecomm-fixture-server', 'custom-cookie-value', {
    maxAge: 900000, // Expires in 15 minutes
    httpOnly: true, // Ensures the cookie is only accessible via HTTP(S)
  });

  // Send a response back with the form data
  res.send('Received form data: ' + JSON.stringify(formData));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
