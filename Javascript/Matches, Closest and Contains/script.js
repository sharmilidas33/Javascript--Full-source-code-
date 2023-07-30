let id1 = document.getElementById("id1")
console.log(id1);

//To check if element matches the given CSS selector
id1.matches(".class");
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

//To look for the nearest ancestor that matches the given CSS selector.
console.log(span1.closest(".box"));
console.log(span1.closest("#span1"));

//Returns true is element is inside another element.
console.log(id1.contains(span1));