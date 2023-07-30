console.log(document.getElementsByTagName("span")[0])
console.dir(document.getElementsByTagName("span")[0]);

console.log(document.body.firstElementChild.nodeName)
console.log(first.innerHTML) //innerHTML is valid only for element nodes
console.log(first.outerHTML) 

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)

console.log(document.getElementById("first").textContent) //Gives only text, minus all the other.
