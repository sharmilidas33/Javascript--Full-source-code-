//Redirecting to another website using addEventListener
let a= document.getElementById("twitter");
a.addEventListener("click", function(e){
    let url="https://twitter.com";
    window.open(url,"_blank");
})

//Glowing bulb with SetInterval.

setInterval(function e(){
    document.querySelector(".bulb").classList.toggle("bulb")
},300);