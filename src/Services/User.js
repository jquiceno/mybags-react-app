import axios from 'axios'

const { REACT_APP_API_URL } = process.env

class User {
  constructor (userId = null) {
    this.userId = userId
  }

  static async getAll () {
    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/users`)
      return data.data
    } catch (error) {
      throw error
    }
  }

  static async update (userId, newData = {}) {
    try {
      const { data } = await axios.put(`${REACT_APP_API_URL}/users/${userId}`, newData)
      return data.data
    } catch (error) {
      throw error
    }
  }
}

export default User