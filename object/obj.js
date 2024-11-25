// singleton

//object literals
//Object.create

const mySym = Symbol("Key1")


const JsUser = {
    name: "Sankalp",
    "full name":"Sankalp Ramteke",
    age: 20,
    [mySym]: "Key1",                  //for refering as a symbol
    location: "Nagpur",
    email: "sankalp@gmail.com",
    isLoggedIn: false,
    LastLogedinDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sankalp@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "sankalp@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
    
}



JsUser.greetingTwo  = function() {
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






