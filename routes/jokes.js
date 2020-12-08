const axios = require('axios')

const getJokes = async (req, res) => {
    try {
      const results = await axios.get(`https://api.chucknorris.io/jokes/random?category=${req.query.category}`)
      console.log(req.query.category)
      return res.send(results.data) 
  
    } catch (error) {
      console.error(error)
    }
  }

  module.exports = getJokes

