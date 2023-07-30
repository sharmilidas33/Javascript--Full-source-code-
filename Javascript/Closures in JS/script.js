//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 

message="global"
function greet(){
    message="Complete the project on time."
    {
        let message="how are you?"
        console.log("Good morning!"+message)
    }
    console.log(message)
    //Closure is a function along with its lexical environment
    let a= function greet2(){
        console.log("Good to see you "+message);
    }
    return a;
}
greet()
a= greet()
a()

//Second example.
function rf(){
    const x=()=>{
        let p=2;
        console.log(p);
        const y=()=>{
            let p=4;
            console.log(p);
            const z=()=>{
                let p=6;
                console.log(p);
            }
            z()
        }
        y()
    }
    return x;
}
let s= rf();
s()