const express = require("express");
const  axios = require("axios");

const app = express();

// Routes
app.use('./categories', require('./routes/categories'));
app.use('./jokes', require('./routes/jokes'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));