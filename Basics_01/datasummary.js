// Primitive datatypes
// 7 types : String, Number, Boolean, null , undefined, Symbol, BigInt


// Refrence (Non Primitive)
// Array, Objects, Functions


const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let ueremail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 74675476584n  //bigint representation
// console.log(bigNumber);

const heros = ["shaktiman", "naagraj", "doga"]    // ceating array

let myobj = {                       //Creating object
    name : "Sankalp",
    age : 20,
}

const myfunction = function(){            //storing function in variable
    console.log("hello sankalp");
    
}

//console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myfunction);



