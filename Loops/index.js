//Loops in javascript
//for loop
const array = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i< array.length;i++){
    console.log(array[i])
}
//Apart from the traditional loop it also provides the other for loops like for in and for of

//for...in loop
//syntax for (variable in object){}
let person = {
    name : "Chandan B",
    age : 21,
    role : 'intern'
}

for (let key in person){
    console.log(key + ':' + person[key]) //output : name : Chandan B age : 21 role : intern
}

//for...of loop
//syntax for (variable of object) {}

const newArray = [1,2,3,4,5,6]
for (let num of newArray){
    console.log(num)
}

//while

let i = 10;
while(i > 0){
    console.log(i)
    i = i -1;
}

//break

let number = 10;
while(number > 0){
    console.log(number)
    number = number - 1
    if(number === 5){
        break
    }
}
//continue
let number1 = 10;
while(number1 > 0){
    number1 = number1 - 1
    if(number1 === 5){
        continue
    }
    console.log(number1)
  
}

