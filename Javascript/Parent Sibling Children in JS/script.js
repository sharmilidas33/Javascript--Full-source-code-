console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);


let arr= Array.from(document.body.childNodes);
console.log(arr);

a=document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);
console.log(a.firstChild.nextSibling);