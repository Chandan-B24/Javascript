//Arrays in Javascript

//basic syntax
const car = ['BMW','Benz','Mustang'];

//arrays can have more than one type or heterogenous type

const heterogenousType = ['chandan',21,true,{isWorking:true},null,undefined];

//creating new array using new keyword
const carArray = new Array('BMW','Benz','Mustang')
console.log(carArray) //output : [ 'BMW', 'Benz', 'Mustang' ]
console.log(carArray[2]) //output : Mustang  accessing array elements through indexing

//Arrays in JS are sparse means we can also assign the variables in random locations even though the previous indexes were undefined
const number = new Array()
number[2] = 3
console.log(number) // output : [undefined,undefined,3]

console.log(heterogenousType)

/*-------------------------------------------------------------*/

//Array operation or manipulations
//stack operations FILO or LIFO
//push
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack) // output : [1,2,3]
//pop
console.log(stack.pop()) //output : 3
console.log(stack) // output : [1,2]

//queues using shifting & unshifitng
//shifting used to remove the variable exactly the way they have entered FIFO
const queue = []
queue.push('first'); 
queue.push('second');
queue.push('third');

console.log(queue.shift()); // output : first
console.log(queue.shift()); // output : second
console.log(queue.shift()); // output : third

//unshifitng basically used to insert variable at the beginning of array

const queueElements = [1,2,3,];
queueElements.unshift(0);
console.log(queueElements); // output : [ 0, 1, 2, 3 

//splicing
//general syntax to remove array elements at specific position using splice(startingIndex,no.ofelementsToBeRemoved)

const splicingArray = [1,2,3,4,5,6,7,8,9];
splicingArray.splice(5,4); // output : [ 1, 2, 3, 4, 5 ]
console.log(splicingArray)

//length of the array
const commonArray = [1,2,3,4,5,6,7];
console.log(commonArray.length); //output : 7

//at() used to get the array element from specific position
const thirdElement = commonArray.at(2);
console.log(thirdElement) //output : 3

//join() used to join all the element into a string it takes an argument and those argument in between every join of array element
const joinedArray = commonArray.join('*');
console.log(joinedArray) // output : 1*2*3*4*5*6*7

//toString used to combine array elements into a string
const combinedrString = commonArray.toString()
console.log(combinedrString); // output : 1,2,3,4,5,6,7

//concatinating two arrays
const firstArray = [1,2,3,4,5];
const secondArray = [6,7,8,9];

let resultingArray = firstArray.concat(secondArray);
console.log(resultingArray); //output : [1,2,3,4,5,6,7,8,9]