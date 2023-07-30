//Asynchronous programming- 
setTimeout(function e(){
    console.log("Hello");
},2000);

//Synchronous programming -
// let a= prompt("Enter your name: ");
// let b= prompt("Enter your age: ");
// console.log(a+ " is "+b+" years old.");

//Callback and error handling
function loadScript(src,callback){
    let script= document.createElement("script");
    script.src= src;
    script.onload= function(){
        console.log("Loaded script with SRC: "+ src);
        callback(null,src);
    }
    //error handling
    script.onerror = function(){
        console.log("Error loading script with SRC: "+ src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}
function gm(error,src){
    if(error){
        console.log(error);
        return error;
    }
    else{
        alert("Good morning"+src);
    }
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js",gm);
 
//Pyramid of doom - When we have callback inside callbacks, the code gets difficult to manage.


 