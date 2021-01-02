const Stat = require('../entity/stat')

class StatRepository {
  constructor(connection) {
    this.connection = connection
  }

  insert(stat) {
    return new Promise((resolve, reject) => {
      this.connection.query('INSERT INTO `tb_stat` SET ?', stat, (error, results, fields) => {
        if (error) reject(error)
        else resolve(results.insertId)
      })
    })
  }

  findByUserId(userId) {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM `tb_stat` WHERE `user_id`=?', [userId], (error, results, fields) => {
        if (error) reject(error)
        else {
          const data = results[0]
          if (!data) resolve(data)
          else resolve(new Stat(data))
        }
      })
    })
  }
}

module.exports = StatRepository
