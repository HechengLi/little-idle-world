class Stat {
  constructor({ id, user_id, hp, mp, attack, defence, speed }) {
    this.id = id
    this.user_id = user_id
    this.hp = hp
    this.mp = mp
    this.attack = attack
    this.defence = defence
    this.speed = speed
  }
}

module.exports = Stat
