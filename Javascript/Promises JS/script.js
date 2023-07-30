//The solution to the callback hell is known as promises.
//It is a "promise of code execution". The code either fails or runs, in both cases the subscriber will be notified.
// let promise= new Promise(function(resolve,reject){
//     alert("I am an alert");
//     resolve(56);
// })

// console.log('Hello');
// setTimeout(() => {
//     console.log("Hello in 2 secs");  
// }, 2000);
// console.log("HEY");
// console.log(promise);

// //Promises is used for parallel execution of all these-
// //Fetch a webpage.
// //Fetch pictures from servers.
// //Fetch data from the data api.
// //Print downloading.

// let p1= new Promise((resolve,reject)=>{
//     console.log("Promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and I am fulfilled");
//         resolve(true);
//     }, 3000);
// });
// let p2= new Promise((resolve,reject)=>{
//     console.log("Promise is pending");
//     setTimeout(() => {
//         console.log("Rejected promise");
//         reject(new Error("Error"));
//     }, 3000);
// });
// console.log(p1);
// console.log(p2);
// //To execute something after promise we use .then()
// p1.then((value)=>{
//     console.log(value);
// })
// //To catch error.
// p2.catch((error)=>{
//     console.log(`An error occured ${error}`);
// })

//Promise chaining with .then() {resolving callback hell}
// let p1= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("REsolved after 2 secs");
//         resolve(56);
//     }, 2000);
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Promise 2");
//         }, 2000);
//     })
//     return p2;
// }).then((value)=>{
//     console.log("We are done");
// }).then((value)=>{
//     console.log("Finally done");
// })

// const loadScript =()=>{
//     return new Promise((resolve,reject)=>{
//     let script= document.createElement("script");
//     script.type="text/javascript";
//     script.src= src;
//     document.body.appendChild(script);
//     script.onload=()=>{
//         resolve(1)
//     }
//     script.onerror=()=>{reject(0)}
//     })
// }
// let p3= loadScript("https//:www.google.com");
// p3.value((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log("There was a problem in loading the script");
// })

//Attaching multiple handlers to promise.
// let p4= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Hey I am not resolved yet");
//         resolve(1);
//     }, 2000);
// })
// p4.then(()=>{
//     console.log("Hey I am now resolved")
// })
// p4.then(()=>{
//     console.log("Hurray")
// })

//PromiseAPI
let p1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 1");
    }, 2000);
});
let p2= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 2");
    }, 1000);
});
let p3= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});
// let promise_all = Promise.all([p1,p2,p3])
let promise_all = Promise.allSettled([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value);
});

let promise_race = Promise.race([p1,p2,p3])
promise_race.then((value)=>{
    console.log(value);
});



