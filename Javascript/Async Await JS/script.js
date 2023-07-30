//There is a special syntax to work with promises in Javascript. 
//A function can be made async by using async keyword like this-

//We can make any function async and then wait promises inside it.
//Async function always returns a promise.
// async function e(){
//     return 6;
// }
// e().then((x)=>{
//     alert(x);
// })
async function weather(){
    let KolkataWeather= new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("34 Degree")
        }, 1000);
    })
    let BangaloreWeather= new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("36 Degree")
        }, 3000);
    })
    // KolkataWeather.then(alert)
    // BangaloreWeather.then(alert)
    console.log("Fetching.. please wait")
    let KolW= await KolkataWeather
    console.log("Fetched Koltata Weather "+KolW)

    console.log("Fetching.. please wait")
    let BangW= await BangaloreWeather
    console.log("Fetched Bangalore Weather "+BangW)
    return[KolW,BangW]
}
console.log("Weather control room")
let a= weather()
a.then((value)=>{
    console.log(value)
})
 
