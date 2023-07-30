//The error object
try{
    //Throwing custom error
    console.log(Sharmili)
    throw new ReferenceError("You gave the wrong input")
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

//Throwing custom error
let age= prompt("Enter your age: ")
age= Number.parseInt(age)
if(age>120){
    throw new Error("Invalid Age")
} 