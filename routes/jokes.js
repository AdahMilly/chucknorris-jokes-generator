const axios = require('axios')

const getJokes = async (req, res) => {
    try {
      console.log(req.query.category)

      const category = req.query.category
      const results = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)

      return res.send(results.data) 
  
    } catch (error) {
      console.error(error)
    }
  }

  module.exports = getJokes

