//callback fuctions
//function that passed as an argument to the other function is called callback function

var callback = function () {
    console.log("Done..!")
}

setTimeout(callback,2000) // after 2 seconds it will log Done..!