const express = require("express");
const router = express.Router();

const getCategories = async () => {
    try {
      return await axios.get('https://api.chucknorris.io/jokes/categories')
    } catch (error) {
      console.error(error)
    }
  }

module.exports = router;