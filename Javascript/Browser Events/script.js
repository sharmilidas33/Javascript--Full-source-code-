let a=document.getElementsByClassName("container")[0].innerHTML;
a.onclick=()=>{
    let b= document.getElementsByClassName("container")[0]
    b.innerHTML="Hey";
}

//EventListener
let c= document.getElementById("btn");
c.addEventListener("click",()=>{
    console.log("U clicked the button");
})
c.addEventListener("click",function(e){
    confirm("Do you want to stay in this page?");
    console.log(e.target);
})
