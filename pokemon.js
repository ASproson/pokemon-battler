const inquirer = require('inquirer');
let battleStart = true;

// TRAINER-POKEMON METHODS

function battleCry (trainer) {
    return trainer.bag[1].sound;
}

function moveSet (trainer) {
    return trainer.bag[1].move;
}

// CATCHING METHOD

function gottaCatchEmAll (trainer, pokemon) {
    if(trainer.bag.length < 8){
        trainer.bag.push(pokemon)
    }
    return `Bag is full, sent to Bill's PC`;
}

// FAINTING METHOD

function fainting (trainer) {

    if(trainer.bag.length >= 2){
        if(trainer.bag[1].hp <= 0){
            console.log(`       ${trainer.bag[1].name} fainted! \n`)
            trainer.bag.splice(1, 1);
            if(trainer.bag.length >= 2){
                console.log(`${trainer.name} sent out ${trainer.bag[1].name}! \n`)
                console.log(`${trainer.bag[1].sound}! \n`)
            }
            if(trainerOne.bag.length === 1){
                battleStart = false;
                console.log(`${trainerOne.name} blacked out! \n`);
                console.log(pikachuFaint)
            } else if (trainerTwo.bag.length === 1){
                console.log(`${trainerTwo.name} blacked out! \n`);
                console.log(pikachuFaint) 
                battleStart = false;
            } 
        }
    }

    if(battleStart === true && trainer.bag.length > 1){
        while(battleStart){
                eyesMet();
            }
        }
    }

// BATTLE METHODS

function eyesMet() {
    this.fight;
    if(this.trainerOneTurn === 1){
        console.log(`${trainerTwo.name} wants to fight! \n`)
        // setTimeout(console.log(`${trainerOne.name} sends out ${trainerOne.bag[1].name}!`), 3000)

        // setTimeout(() => {  console.log("World!"); }, 2000);
        // ^ THIS WORKS NOW

        // setTimeout(() => { console.log(`${trainerOne.name} sends out ${trainerOne.bag[1].name}!`) }, 2000);

        console.log(`${trainerOne.name} sends out ${trainerOne.bag[1].name}! \n`)
        console.log(`${trainerOne.bag[1].sound}! \n`)
        console.log(`${trainerTwo.name} sends out ${trainerTwo.bag[1].name}! \n`)
        console.log(`${trainerTwo.bag[1].sound}! \n`)
    }

    function hpAndWeaknessFunc(){

        let trainerOneStrength = trainerOne.bag[1].strength;
        let trainerOneWeakness = trainerOne.bag[1].weakness;

        let trainerTwoStrength = trainerTwo.bag[1].strength;
        let trainerTwoWeakness = trainerTwo.bag[1].weakness;

        // Attack multiplier & Damage Taken

        if(this.trainerOneTurn % 2 === 1){
            if(trainerOneStrength === trainerTwoWeakness){
                trainerOne.bag[1].attack *= 1.25;
                trainerTwo.bag[1].hp -= trainerOne.bag[1].attack
                trainerOne.bag[1].attack = (trainerOne.bag[1].attack / 125) * 100
                console.log(`${trainerOne.bag[1].name} used ${trainerOne.bag[1].move}! \n`);
                console.log(`${trainerOne.bag[1].name}'s attack was super effective! \n`)
                console.log(`${trainerTwo.bag[1].name}'s health: ${trainerTwo.bag[1].hp} \n`);
            } else if(trainerOneStrength === trainerTwoStrength){
                trainerOne.bag[1].attack *= .75;
                trainerTwo.bag[1].hp -= trainerOne.bag[1].attack
                trainerOne.bag[1].attack = (trainerOne.bag[1].attack / 75) * 100
                console.log(`${trainerOne.bag[1].name} used ${trainerOne.bag[1].move}! \n`);
                console.log(`${trainerOne.bag[1].name}'s attack was not very effective! \n`)
                console.log(`${trainerTwo.bag[1].name}'s health: ${trainerTwo.bag[1].hp} \n`);
            } else {
                trainerTwo.bag[1].hp -= trainerOne.bag[1].attack;
                console.log(`${trainerOne.bag[1].name} used ${trainerOne.bag[1].move}! \n`);
                console.log(`${trainerOne.bag[1].name}'s attack was slightly effective! \n`);
                console.log(`${trainerTwo.bag[1].name}'s health: ${trainerTwo.bag[1].hp} \n`);
            }
            fainting(trainerTwo)
        }
        if(this.trainerOneTurn % 2 === 0){
            if(trainerTwoStrength === trainerOneWeakness){
                trainerTwo.bag[1].attack *= 1.25;
                trainerOne.bag[1].hp -= trainerTwo.bag[1].attack
                trainerTwo.bag[1].attack = (trainerTwo.bag[1].attack / 125) * 100
                console.log(`${trainerTwo.bag[1].name} used ${trainerTwo.bag[1].move}! \n`);
                console.log(`${trainerTwo.bag[1].name}'s attack was super effective! \n`)
                console.log(`${trainerOne.bag[1].name}'s health: ${trainerOne.bag[1].hp} \n`);
            } else if(trainerTwoStrength === trainerOneStrength){
                trainerTwo.bag[1].attack *= .75;
                trainerOne.bag[1].hp -= trainerTwo.bag[1].attack
                trainerTwo.bag[1].attack = (trainerTwo.bag[1].attack / 75) * 100
                console.log(`${trainerTwo.bag[1].name} used ${trainerTwo.bag[1].move}! \n`);
                console.log(`${trainerTwo.bag[1].name}'s attack was not very effective! \n`)
                console.log(`${trainerOne.bag[1].name}'s health: ${trainerOne.bag[1].hp} \n`);
            } else {
                trainerOne.bag[1].hp -= trainerTwo.bag[1].attack;
                console.log(`${trainerTwo.bag[1].name} used ${trainerTwo.bag[1].move}! \n`);
                console.log(`${trainerTwo.bag[1].name}'s attack was slightly effective! \n`);
                console.log(`${trainerOne.bag[1].name}'s health: ${trainerOne.bag[1].hp} \n`);
            }
        }
        fainting(trainerOne)
    }
    trainerTurn();
    return hpAndWeaknessFunc();
}

function battleSequence() {
    if(trainerOne.bag.length === trainerTwo.bag.length){
        for(let i = 0; i < trainerOne.bag.length; i++){
            eyesMet();
        }
    } else if (trainerOne.bag.length > trainerTwo.bag.length){
        for(let i = 0; i < trainerOne.bag.length; i++){
            eyesMet();
        }
    } else {
        for(let i = 0; i < trainerTwo.bag.length; i++){
            eyesMet();
        }
    }

    if(trainerOne.bag.length === 1){
        return `${trainerOne.name} blacks out! ${trainerTwo.name} wins! \n`
    } else {
        return `${trainerTwo.name} blacks out! ${trainerOne.name} wins! \n`
    }

}

// BATTLE TURNS

function trainerTurn() {
    this.trainerOneTurn += 1;
}


// CONSTRUCTOR CLASSES

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

function TrainerBattle (trainerOne, trainerTwo) {
    this.fight          = eyesMet;
    this.move           = trainerTurn;
    this.trainerOneTurn = 1;
    this.trainerOne     = trainerOne;
    this.trainerTwo     = trainerTwo;
}

// POKEMON FACTORY

const pikachu       = new Pokemon('Pikachu', 35, 'Electric', 15, 'Thunderbolt', 'Ground','Pika!');
const charmander    = new Pokemon('Charmander', 39, 'Fire', 15, 'Ember', 'Water','Chaaaar!');
const bulbasaur     = new Pokemon('Bulbasaur', 45, 'Grass', 15, 'Vine whip', 'Fire','Saauuuu!');
const squirtle      = new Pokemon('Squirtle', 44, 'Water', 15, 'Water gun', 'Electric','Squiiiirr!');
const pidgey        = new Pokemon('Pidgey', 40, 'Flying', 12, 'Gust', 'Electric','Kawwww');
const caterpie      = new Pokemon('Caterpie', 45, 'Grass', 10, 'Tackle', 'Fire','Preeee!');
const staryu        = new Pokemon('Staryu', 30, 'Water', 20, 'Bubble beam', 'Electric','Hyaaah!');
const goldeen       = new Pokemon('Goldeen', 45, 'Water', 12, 'Water pulse', 'Electric','Goldeeeeen!');
const ratata        = new Pokemon('Ratata', 30, 'Normal', 10, 'Bite', 'Ground','Ratatataaaa!');
const onyx          = new Pokemon('Onyx', 35, 'Ground', 20, 'Rock throw', 'Water', 'Grwarawraw!');
const geodude       = new Pokemon('Geodude', 40, 'Ground', 12, 'Stealth rock', 'Water', 'GEODUDE!');


// TRAINER FACTORY

const ash = new Trainer('Ash', [, pikachu,charmander]);
const misty = new Trainer('Misty', [, staryu, goldeen]);
const gary = new Trainer('Gary', [, ratata, squirtle]);
const brock = new Trainer('Brock', [, onyx, geodude]);
// const officerJenny


// INQUIRER

function battleBegins () {
    inquirer
        .prompt([
            {
                name: 'beginBattle',
                type: 'list',
                message: 'Do you want to battle?',
                choices: ['Yes', 'No']
            },
            {
                name: 'selectPlayer',
                type: 'list',
                message: 'Please select your trainer',
                choices: ['Ash', 'Misty', 'Brock', 'Gary']
            },
            {
                name: 'selectEnemy',
                type: 'list',
                message: 'Please select your rival',
                choices: ['Ash', 'Misty', 'Brock', 'Gary']
            },
        ])
        .then((answer) => {
            // Ash battle pairs
            if(answer.selectPlayer === 'Ash' && answer.selectEnemy === 'Misty'){
                TrainerBattle(ash, misty);
                battleSequence()
            }
            if(answer.selectPlayer === 'Ash' && answer.selectEnemy === 'Brock'){
                TrainerBattle(ash, brock);
                battleSequence()
            }
            if(answer.selectPlayer === 'Ash' && answer.selectEnemy === 'Gary'){
                TrainerBattle(ash, gary);
                battleSequence()
            }
            if(answer.selectPlayer === 'Ash' && answer.selectEnemy === 'Ash'){
                TrainerBattle(ash, ash);
                battleSequence()
            }

            // Misty battle pairs
            if(answer.selectPlayer === 'Misty' && answer.selectEnemy === 'Ash'){
                TrainerBattle(misty, ash);
                battleSequence()
            }
            if(answer.selectPlayer === 'Misty' && answer.selectEnemy === 'Brock'){
                TrainerBattle(misty, brock);
                battleSequence()
            }
            if(answer.selectPlayer === 'Misty' && answer.selectEnemy === 'Gary'){
                TrainerBattle(misty, gary);
                battleSequence()
            }
            if(answer.selectPlayer === 'Misty' && answer.selectEnemy === 'Misty'){
                TrainerBattle(misty, misty);
                battleSequence()
            }

            // Brock battle pairs
            if(answer.selectPlayer === 'Brock' && answer.selectEnemy === 'Ash'){
                TrainerBattle(brock, ash);
                battleSequence()
            }
            if(answer.selectPlayer === 'Brock' && answer.selectEnemy === 'Gary'){
                TrainerBattle(brock, gary);
                battleSequence()
            }
            if(answer.selectPlayer === 'Brock' && answer.selectEnemy === 'Misty'){
                TrainerBattle(brock, misty);
                battleSequence()
            }
            if(answer.selectPlayer === 'Brock' && answer.selectEnemy === 'Brock'){
                TrainerBattle(brock, brock);
                battleSequence()
            }

            // Gary battle pairs
            if(answer.selectPlayer === 'Gary' && answer.selectEnemy === 'Ash'){
                TrainerBattle(gary, ash);
                battleSequence()
            }
            if(answer.selectPlayer === 'Gary' && answer.selectEnemy === 'Brock'){
                TrainerBattle(gary, brock);
                battleSequence()
            }
            if(answer.selectPlayer === 'Gary' && answer.selectEnemy === 'Misty'){
                TrainerBattle(gary, misty);
                battleSequence()
            }
            if(answer.selectPlayer === 'Gary' && answer.selectEnemy === 'Gary'){
                TrainerBattle(gary, gary);
                battleSequence()
            }
          })
}

battleBegins();

// ASCII art
// Random trainer selection with random pokemon
// Allow potions/items
// Battle interface















const pikachuFaint = String.raw `
⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
`