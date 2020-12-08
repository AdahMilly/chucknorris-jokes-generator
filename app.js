const express = require("express");
const getCategories = require('./routes/categories')
const getJokes = require('./routes/jokes')

const app = express();

// Routes
app.use('/categories',  getCategories);
app.use('/jokes', getJokes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => { console.log(`App runs on localhost:${PORT}`) });
