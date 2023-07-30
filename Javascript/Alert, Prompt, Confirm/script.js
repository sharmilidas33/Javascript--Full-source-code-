//Alert for browser (Does not return anything)
// alert("This is an alert");

//Prompt in browser
// let name= prompt("What is your name?","Guest");
// console.log(name);

//Confirm in browser
let confirmEverything= confirm("Are you sure of all the information you provided?");
console.log(confirmEverything);

if(confirmEverything){
    //Code of the information.
    console.log("Accepted all the information");
}
else{
    //Code to not accept information
    console.log("Information not accepted");
}
 