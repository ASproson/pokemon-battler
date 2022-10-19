// const inquirer = require('inquirer');
// const Pokemon = require("./pokemon.js");

// function test (){
//   inquirer
//     .prompt([
//       {
//         name: "first_name",
//         type: "input",
//         message: "What is your first name?",
//       },
//       {
//         name: "last_name",
//         type: "input",
//         message: "What is your last name?",
//       },
//       {
//         name: "pokemon",
//         type: "list",
//         message: "Which is your favorite pokemon?",
//         choices: ['Pikachu', 'Charmander', 'Squirtle'],
//       },
//       {
//         name: "Continue?",
//         type: "confirm",
//         message: "Do you want to continue?",
//       }
//     ])
//     .then((answer) => {
//       console.log(answer);
//       if(answer['Continue?'] === true){
//         console.log(`Hello ${answer.first_name} ${answer.last_name}, your favorite Pokemon is ${answer.pet}!`)
//       } else {
//         console.log('chose not to continue')
//       }
//     })
// }

// test();


//   // https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f