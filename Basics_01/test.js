//Lets assume u are devloping a e-commerce website , so store the credentials 


const accountID = 12345  //We cant change the 'const' value
let accountEmail = "sankalp@google.com"  //
var accountPassword  = "12345"
accountCity = "Nagpur"   //this is not a good method to declare the variable  

// accountID = 2 //lets try to change the const
// console.log(accountID); //TypeError: Assignment to constant variable.

console.log(accountID);

accountEmail = "ramteke.com"
accountPassword = "xyz"
accountCity = "pune"

console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity]); // table use karke table ke form me print kaarr sakte hai

//variable ko declare karne ke 2 tarike hai let and var
//but we dont prefer var, coz in var there is a problem of scope

/*
preper not to use var
because of issue in block scope and functional scope
*/

let accountState;
console.log(accountState); //undefined
