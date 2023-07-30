document.getElementsByTagName("nav")[0].firstElementChild.style.color="blue";
document.getElementsByClassName("container")[0].firstElementChild.style.color="violet";
document.getElementsByClassName("container")[0].lastElementChild.style.color="red";

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background="cyan";
})
