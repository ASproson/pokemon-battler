const inquirer = require('inquirer');
const {
    Pokemon, 
    ash, 
    misty, 
    brock, 
    charmander,
    squirtle,
    bulbasaur,
    pidgey,
    caterpie,
    pikachu,
    Trainer,
    trainerBattle,
    trainerTurn,
    hpAndWeaknessFunc,
    eyesMet,
    fainting,
    gottaCatchEmAll,
    moveSet,
    battleCry,
} = require("./pokemon.js");


function battleBegins () {
    inquirer
        .prompt([
            {
                name: "beginBattle",
                type: "input",
                message: "Do you want to battle?"
            }
        ])
        .then((trainerBattle) => {
            trainerBattle(ash, misty)
          })
}

battleBegins();