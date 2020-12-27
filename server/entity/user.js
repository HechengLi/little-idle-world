class User {
  constructor({ id, username, nickname, password, email}) {
    this.id = id
    this.username = username
    this.nickname = nickname
    this.password = password
    this.email = email
  }
}

module.exports = User
