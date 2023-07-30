//Local Storage is a web storage object which are not sent to server with each request.
// It stores data in the browser and can be accessed by JavaScript code running on same domain or subdomain of
// that website only, hence it's known as "client-side" storage mechanism.

//Write this in console-
localStorage.setItem("name","Sharmili");

let key= prompt("Enter key to set: ")
let value=prompt("Enter value to set: ")
//setItem
localStorage.setItem(key,value)

//getItem
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

//removeItem
if(key=="red"||key=="purple"){
    localStorage.removeItem(key)
} 

//clear() {clears everything}
//key(index)- get the key on a given index

//localStorage.length (write this in console)
// localStorage.length()

//We can use the two JSON methods to store objects in local Storage:
//JSON.stringigy(object)
//JSON.parse(string)