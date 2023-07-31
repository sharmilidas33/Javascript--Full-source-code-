//JS program to print two words after 2 second delay.
const a= async(text)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(text),2000);
    })
}
(async()=>{
    let text= await a("Hey")
    console.log(text)
    let text1= await a("Whats up")
    console.log(text1)
})()

//JS Program to fing average of numbers in an array using spread syntax.
function avg(a,b,c){
    return a+b+c/3;
}
let x=[3,2,6]
console.log("Average is:"+ avg(...x));

//JS Function which resolves a Promise after n seconds. It takes n as a parameter. Use IIFE to execute the function.
const p= async(n=2,value)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, 1000*n);
    })
}
(async()=>{
    let value= await p(2,"Resolving after 2 secs");
    console.log(value);
})()

//Simple Interest Calculator.
function simpleInterest(p,t,r){
   let SI= p*t*r/100;
   return SI;
}
let z=[5,3,4]
console.log("SI is:"+ simpleInterest(...z));