// let a = document.getElementsByTagName('div')[0]
// a.innerHTML= a.innerHTML+"<h1> Hey <\h1>";

// let b= document.createElement("div");
// b.innerHTML="<h2> Hello World <\h2>";
// a.appendChild(b);
// a.prepend(b);
// a.before(b);
// a.after(b);
// a.replaceWith(b);

//insertAdjacentHTML, insertAdjacentElement and insertAdjacentText
first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>');
first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>');
first.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
first.insertAdjacentHTML('afterend','<div class="test">afterend</div>');

// first.remove()