const User = require('../entity/user')
const BaseRepository = require('./baseRepository')

class UserRepository extends BaseRepository {
  constructor() {
    super('tb_user', User)
  }

  findByUsername(connection, username) {
    return new Promise((resolve, reject ) => {
      connection.query(`SELECT * FROM ${this.table} WHERE username='${username}'`, (error, results) => {
        if (error) {
          reject(error)
        }
        else {
          const convertedData = this.convertType(results)
          if (convertedData.length === 0) {
            const error = new Error()
            error.status = 404
            error.message = 'No user found'
            reject(error)
          }
          resolve(convertedData[0])
        }
      })
    })
  }
}

module.exports = UserRepository
