//Hosting refers to the process whereby the interpreter appears to move the declarations to the top of the code.
console.log(a);
greet()
function greet(){
    console.log("Good morning")
}

var a=6; //let & const cannot be accesed before initialization but var can be.
console.log(a)

//Function expressions and class expressions are not hosted.
