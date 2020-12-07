const axios = require('axios')

const getCategories = async (req, res) => {
    try {
      const results = await axios.get('https://api.chucknorris.io/jokes/categories')
      console.log(results.data)
      res.send(results.data)
    } catch (error) {
      console.error(error)
    }
  }
  module.exports = getCategories
