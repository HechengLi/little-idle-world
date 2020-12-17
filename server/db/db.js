const mysql = require('mysql')

class DataBase {
  constructor() {
    if (!DataBase._instance) {
      this.pool = mysql.createPool({
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'little_idle_world'
      })
      DataBase._instance = this
    }
    return DataBase._instance
  }

  async getConnection() {
    return await new Promise((resolve, reject) => {
      this.pool.getConnection((error, connection) => {
        if (error) reject(error)
        resolve(connection)
      })
    })
  }
}

module.exports = DataBase
