//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)   //Array me start  me value insert hoo jayeangi
//myArr.shift()      //Array ke start se value remove hoo jayeangi
//console.log(myArr);

//console.log(myArr.includes(9));  //for checking if element present or not

//console.log(myArr.indexOf(3));

const newArr = myArr.join()  // , (comma) seprated karne ke liye

console.log(myArr);
console.log(newArr);

//-------------------------- Slice, splice---------------------------

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);


