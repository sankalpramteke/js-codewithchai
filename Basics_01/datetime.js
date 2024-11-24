//My Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024,10,24)
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleDateString());

let date = new Date("11-24-2024")
//console.log(date.toLocaleTimeString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// `${newwDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    
})
