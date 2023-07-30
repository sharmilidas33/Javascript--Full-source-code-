let b= document.body;
console.log("First child of b is: ",b.firstChild);
console.log("First Element Child of b is: ",b.firstElementChild);

function changeColor(){
    document.body.firstElementChild.style.background= "yellow";
}