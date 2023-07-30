//Session Storage is used less than the Local Storage.
//Properties and methods are same as local storage but-
//It exists only within the current browser tab. Another tab with same page will have a different storage.

sessionStorage.setItem("name","Sharmili")
console.log(sessionStorage.getItem("name"))

window.onstorage=()=>{
    alert("changed")
    console.log(e)
}