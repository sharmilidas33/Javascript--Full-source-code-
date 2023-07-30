//  Change the card title to red
// let cardTitle= document.getElementsByClassName('card-title')[0]
// cardTitle.style.color="red";

//Now by Id
let cardTitle= document.getElementById("firstcard")
cardTitle.style.color="blue";

//CSS Selector
let ctitle= document.querySelectorAll(".card-title")
ctitle[0].style.color="blue";
ctitle[1].style.color="violet";
ctitle[2].style.color="green";
console.log(ctitle);

document.querySelector('.first').style.color="yellow";
document.querySelector('.first').style.background="violet";
document.querySelector('.second').style.color="pink";
document.querySelector('.second').style.background="gray";
document.querySelector('.third').style.color="sky";

//Get Element by Tag Name
console.log(document.getElementsByTagName("a"));