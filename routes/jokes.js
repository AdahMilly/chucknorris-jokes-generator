const express = require("express");
const router = express.Router();

const getJokes = async () => {
    try {
      return await axios.get('https://api.chucknorris.io/jokes/random?category=movie')
    } catch (error) {
      console.error(error)
    }
  }

module.exports = router;