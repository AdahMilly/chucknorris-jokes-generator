const axios = require('axios')

const getJokes = async () => {
    try {
      return await axios.get('https://api.chucknorris.io/jokes/random?category=movie')
    } catch (error) {
      console.error(error)
    }
  }

