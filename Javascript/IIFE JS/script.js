let a=()=> {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(6)
    }, 2000);
    })
}
//IIFE (wrapping in a bracket without using function.)
(async()=>{
    let b= await a();
    console.log(b);

    let c= await a();
    console.log(c);

    let d= await a();
    console.log(d);
})
()

