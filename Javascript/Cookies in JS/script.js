//Cookies are small strings of data stored directly in the browser.
//In JS, document.cookie provides acces to cookies.

//You gotta run this code in a web server otherwise it wont work.
console.log(document.cookie);
document.cookie="name=sharmili36";
document.cookie="name2=sharmili16"
console.log(document.cookie);

let key= prompt("Enter your key: ")
let value= prompt("Enter your value: ")
//you can also use decodeURIComponent for decoding any key
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
