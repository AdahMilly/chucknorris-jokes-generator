const express = require("express");
const  axios = require("axios");

const app = express();

const getCategories = async () => {
    try {
      return await axios.get('https://api.chucknorris.io/jokes/categories')
    } catch (error) {
      console.error(error)
    }
  }

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));