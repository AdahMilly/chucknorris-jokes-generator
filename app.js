const express = require("express");
const getCategories = require('./routes/categories')

const app = express();

// arrow functions
// Routes
app.use('/', async (req, res) => res.send({text: "Welcome to CN"}));
app.use('/categories',  getCategories);
// app.use('/jokes', require('./routes/jokes'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => { console.log(`App runs on localhost:${PORT}`) });
