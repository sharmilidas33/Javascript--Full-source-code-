//Destructuring
let arr=[2,6,8,80,56]

let[a,b,c,...rest]= arr
console.log(a,b,c,rest)

let {e,f}={e:2, f:8};
console.log(e,f)

//Spread Syntax
let arr1=[2,6,8]
let obj= {...arr1}
console.log(obj)

function sum(a1,a2,a3){
    return a1+a2+a3;
}
console.log(sum(...arr1))

let obj2={
    name:"Titli",
    company:"CG",
    address:"BMR"
}
console.log({...obj2, name: "Sharmili"});