const User = require('../entity/user')
const BaseRepository = require('./baseRepository')

class UserRepository extends BaseRepository {
  constructor() {
    super('tb_user', User)
  }

  findByUsername(connection, username) {
    return new Promise((resolve, reject ) => {
      connection.query(`SELECT * FROM ${this.table} WHERE username='${username}'`, this.convertHandler(resolve, reject))
    })
  }
}

module.exports = UserRepository
