//Functions in JS
//named function
function add(a,b){
    return a + b
}

console.log(add(1,2)) // 3

//anonymous function
const addition = function(a,b){
    return a + b
}

console.log(addition(2,3)) // 5

//arrow functinos these are also the anonymous function in ES 6 features
// () => {}
const Add = (a,b) => a + b
console.log(Add(4,5)) // 9

//if it is only one argument it omits the parenthesis
// and for the single line code we can omit the return also
const greet = name => "Hi" + name + "!";
console.log(greet(" Chandan B"))  //Hi Chandan B !

//using arrow as a callback function

const numbers = [2,4,6,8,10];
const multipliedByTwo = number => number * 2;
const multipliedNumbers = numbers.map(multipliedByTwo)
console.log(multipliedNumbers) // [ 4, 8, 12, 16, 20 ]