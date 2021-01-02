class Stat {
  constructor({ id, user_id, userId, hp, mp, attack, defence, speed }) {
    this.id = id
    if (userId) this.user_id = userId
    if (user_id) this.userId = user_id
    this.hp = hp
    this.mp = mp
    this.attack = attack
    this.defence = defence
    this.speed = speed
  }
}

module.exports = Stat
