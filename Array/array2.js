const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);


const all_new_heros = [...marvel_heros,...dc_heros]  //spread operator
console.log(all_new_heros);

// Note : Spread operator and concat do the same thing , prefer spread operator instead of concat because in concat we only combine 2 arrays together not more than that!

const another_array = [1,2,3,[4,5,6],7,[8,12]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//also flat do the same thing like spread and concat

console.log(Array.isArray("Sankalp"));   //its check either is array or not
console.log(Array.from("Sankalp"));      //its creates and array

console.log(Array.from({name : "sankalp"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

