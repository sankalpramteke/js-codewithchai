function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("L");
    console.log("P");
}
//sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

//addTwoNumbers(2,3)

function addTwoNum(num1,num2){
    let result = num1 + num2
    return result
}

//console.log("Result : ",addTwoNum(3,12));

function loginUserMessage(username = "sam"){  //"sam is a default value if we haven't paas any value in the parameter"
    if(!username){
        console.log("Please eneter a username");
        return
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Sankalp"));

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Sankalp",
    prices: 169
}
//console.log(user.username);


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}
//handleObject(user)

handleObject({
    username: "sam",
    prices: 399
})

const myNewAarray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewAarray));

console.log(returnSecondValue([200, 400, 500, 1000]));

