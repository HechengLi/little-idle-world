const Stat = require('../entity/stat')
const BaseRepository = require('./baseRepository')

class StatRepository extends BaseRepository {
  constructor() {
    super('tb_stat', Stat)
  }

  findByUserId(connection, userId) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${this.table} WHERE user_id='${userId}'`, this.convertHandler(resolve, reject))
    })
  }
}

module.exports = StatRepository
