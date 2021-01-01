class BaseRepository {
  constructor(table, type) {
    this.table = table
    this.type = type
  }

  convertType(queryResult) {
    if (this.type) return queryResult.map(row => new this.type(row))
    else return queryResult
  }

  convertHandler(resolve, reject) {
    return (error, results) => {
      if (error) {
        reject(error)
      }
      else {
        const convertedData = this.convertType(results)
        if (convertedData.length === 0) {
          const error = new Error()
          error.status = 404
          error.message = '找不到用户'
          reject(error)
        }
        resolve(convertedData[0])
      }
    }
  }

  insert(connection, data) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO ${this.table} SET ?`, data, (error, results, fields) => {
        if (error) reject(error)
        else resolve(results)
      })
    })
  }

  findAll(connection) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${this.table}`, (error, results, fields) => {
        if (error) reject(error)
        else resolve(this.convertType(results))
      })
    })
  }
}

module.exports = BaseRepository
