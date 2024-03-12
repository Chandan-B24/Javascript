//Objects in javascript is usually used as the data structure to store the key-value pair values as like map in java.
//sample object defined below
const Person = {
    firstName : 'Chandan',
    lastName : 'B',
    qualification : 'B.E.',
    branch : 'Computer Science and Engineering'
}

//Member addressing in js object
console.log(Person.firstName + Person.lastName) //output : ChandanB   :using '.' 
console.log(Person["firstName"] + Person["lastName"]) //output : ChandanB   :using '[]' unlike arrays

//iteration to iterate over the object we usually use the for...in loop

for (let key in Person){
    if(Person.hasOwnProperty(key)){ //hasOwnProperty is to valuate whether the property belongs to object or not.
        console.log("the members " + key + " is " + Person[key])
    }
}

//ES 6 introduced class concept along with constructor

class Car{
    constructor(name,modelYear,price){
        this.name = name;
        this.modelYear = modelYear;
        this.price = price
    }

    getCarDetails(){
        console.log(this.name + " " + this.modelYear + " " + this.price);
    }

}

const obj = new Car("Tata",2023,1237700)
obj.getCarDetails()