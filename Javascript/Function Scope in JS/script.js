//let has block level scope but var has global scope.
let p=89
function u() {
    let a=6;
    var b=9;
    console.log(a)
    console.log(b)
    console.log(p)
}
// console.log(a)
u()
// console.log(b)
console.log(p)