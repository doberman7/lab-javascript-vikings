// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
      this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
    return
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength)
    this.name = name,
      this.health = health,
      this.strength = strength
  }
  // should return "NAME has received DAMAGE points of damage", if the Viking is still alive
  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) {
      this.alive = true;
      return `${this.name} has received ${damage} points of damage`
    } else if (this.health === 0) {
      this.alive = false;
      return `${this.name} has died in act of combat`

    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) {
      this.alive = true;
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health === 0) {
      this.alive = false;
      return `A Saxon has died in combat`

    }
  }


}

// War
class War {
  constructor(){
    this.vikingArmy=[]
    this.saxonArmy=[]
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    Saxon.receiveDamage=Viking.strength
  }
  saxonAttack(){}
  showStatus(){}
}
