import axios from 'axios'

const { REACT_APP_API_URL } = process.env

class Person {
  constructor (personId = null) {
    this.personId = personId
  }

  static async getAll () {
    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/persons`)
      return data.data
    } catch (error) {
      throw error
    }
  }

  static async update (personId, newData = {}) {
    try {
      const { data } = await axios.put(`${REACT_APP_API_URL}/persons/${personId}`, newData)
      return data.data
    } catch (error) {
      throw error
    }
  }
}

export default Person