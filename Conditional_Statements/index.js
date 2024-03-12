//Conditional stateent in JS are similar to the traditional languages.
//if
const a = 21;
const b = 32;

if(a < b) {
    console.log("a is lesser than b"); //output : a is lesser than b
}

//if-else

const myAge = 16;

if(myAge > 18) {
    console.log("eligible for voting");
}
else{
    console.log("no eligible for voting") //output : no eligible for voting
}

//else-if
if(myAge < 18){
    console.log("i'm a teenager") //output : i'm a teenager
}
else if(myAge > 18 && myAge <= 60){
    console.log("i'm an adult")
}
else{
    console.log("I'm a old age person")
}


//switch statements

const position = "Developer";
switch(position){
    case "UI/UX" : console.log("I'm a UI/UX Designer");
                    break;
    case "Developer" : console.log("I'm a Developer"); //I'm a Developer
                        break;
    case "Devops" : console.log("I'm a Devops Engineer");
                        break;
}

