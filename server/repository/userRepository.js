const User = require('../entity/user')

class UserRepository {
  constructor(connection) {
    this.connection = connection
  }

  insert(user) {
    return new Promise((resolve, reject) => {
      this.connection.query('INSERT INTO `tb_user` SET ?', user, (error, results, fields) => {
        if (error) reject(error)
        else resolve(results.insertId)
      })
    })
  }

  findByUsername(username) {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM `tb_user` WHERE `username`=?', [username], (error, results, fields) => {
        if (error) reject(error)
        else {
          const data = results[0]
          if (!data) resolve(data)
          else resolve(new User(data))
        }
      })
    })
  }
}

module.exports = UserRepository
