//Object Destructuring 1

// console.log(numPlanets); - returns => 8
// console.log(yearNeptuneDiscovered); - returns => 1846



//Object Destructuring 2

//console.log(discoveryYears); - returns => {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



//Object Destructuring 3

//getUserData({firstName: "Alejandro", favoriteColor: "purple"}) - returns => 'Your name is Alejandro and you like purple'

//getUserData({firstName: "Melissa"}) - returns => 'Your name is Melissa and you like green'

//getUserData({}) - returns => 'Your name is `undefined' and you like green`



//Array Destructuring 1
//console.log(first); - returns => "Maya"
//console.log(second); - returns => "Marisa"
// console.log(third); - returns => "Chi"



//Array Destructuring 2

//console.log(raindrops); - returns => 'Raindrops on roses'
//console.log(whiskers); - returns => 'whiskers on kittens'
//console.log(aFewOfMyFavoriteThings); - returns => ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]



//Array Destructuring 3

//returns => [10, 30, 20]






//ES5 Assigning Variables to Object Properties

const obj = {
  numbers: {
    a: 1, 
    b: 2
  }
}; 

let {a} = obj.numbers; 
let {b} = obj.numbers; 



//ES5 Array Swap

let arr = [1, 2]; 

[arr[1], arr[0]] = [arr[0], arr[1]]; 




//raceResults() 

const raceResults = (arr) => {
const [first, second, third, ...rest] = arr;
return {
  first, second, third, rest
}
} 