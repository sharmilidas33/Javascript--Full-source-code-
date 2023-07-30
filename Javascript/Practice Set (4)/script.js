//Loading scripts with the help of promises
async function loadScript(src){
    return new Promise((resolve, reject)=>{
        let script= document.createElement("script")
        script.src= src
        script.onload=()=>{
            resolve(src + " Resolved succesfully")
        }
        document.head.append(script)
    })
}
let a= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
a.then((value)=>{
    console.log(value)
})


// const main1= async()=>{
//     console.log(new Date().getSeconds())
//     let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getSeconds())
// }
// console.log(value)
// main1() 

//A promise which rejcts after 3 seconds using async/await to get its value and also try and catch for error.
let p=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
             reject(new Error("Error occured"))
        }, 3000);
    })
}
let t = async()=>{
    try{
        let c= await p()
        console.log(c)
    }
    catch(error){
        console.log("Error handled")
    }
}
t()

//Prgram using Promise.all() inside async/await 
let p1= async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}
let p2= async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
let p3= async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 3000);
    })
}
const run= async()=>{
    console.time("run")
    let a1= p1()
    let a2= p2()
    let a3= p3()
    let all_a= await Promise.all([a1,a2,a3])
    console.log(all_a)
    console.timeEnd("run")
}
run()