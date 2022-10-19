// 6 pokemon at a time
// separate objects trainer, pokemon, battle objects
// ASCII art
// Random trainer selection with random pokemon

// TRAINER TWO ISNT ATTACKING BACK
// SPLICE PROBLEM
// NOT CALLING BATTLE ANYWHERE, PROBABLY SAVE CODE BY DOING SO

class Pokemon {
    constructor(name, hp, type = 'Normal', attack, move, weakness, sound){
        this.name           = name,
        this.hp             = hp,
        this.type           = type,
        this.attack         = attack,
        this.move           = move,
        this.strength       = type,
        this.weakness       = weakness,
        this.sound          = sound,
        this.level;
    
        this.talk           = battleCry;
        this.useYourMoves   = moveSet;
    }
}

class Trainer {
    constructor(name, bag){
        this.name   = name,
        this.bag    = bag,
    
        this.catch  = gottaCatchEmAll;
        this.switch = fainting;
    }
}
class Battle {
    constructor(trainerOne, trainerTwo){
        this.trainerOne = trainerOne;
        this.trainerTwo = trainerTwo;
    
        this.fight      = trainerBattle;
    }
}