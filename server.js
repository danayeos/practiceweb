// import the express module
const express = require('express');

// create an instance of an express application
const app = express();

// define the port number
const port = 8080;

// define a route
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
