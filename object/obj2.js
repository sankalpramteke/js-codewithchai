//const  tinderUser = new Object()    //Singleton Object
const tinderUser = {}                //Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name  = "vaibhav"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sankalp",
            lastname: "Ramteke"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)  //used for combining objects

const obj3 = {...obj1,...obj2}

console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "sr@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


