// document.write("HEllo WOrld \n");
// var a=2;
// var b=2;
// document.write("The value of a and b is \n"+(a+b));
// document.write("\n The value of a and b is \n"+(a**b));

// b= 90;
// b=-b;
// document.write("\n"+b);

//  n="\n Sharmili";
//  p=" is a good girl";
//  document.write(n+p);

// var p=0;
// var  s=1;
// if(p==s){
//     document.write("Same");
// }
// else{
//     document.write("Not Same");
// }

// var n=2;
// switch(n){
//     case 1:
//         document.write("The number is 1");
//         break;
//     case 2: 
//         document.write("The number is 2");
//         break;
//     default:
//         document.write("The number is not recognised");
//         break;
// }

// var n=10;
// for(var i=0;i<=n;i++){
//     document.write(" "+i);
// }

// var n=10;
// while(n<=16){
//     document.write(" "+n);
//     n++;
// }

// let fruits=['mango','pear','grape'];
// fruits.forEach(item=>document.write(item));

// let fruits=['mango','pear','grape'];
// for(i of fruits){
//     document.write(i);
// }

//Gives index
// let fruits=['mango','pear','grape'];
// for(i in fruits){
//     document.write(i);
// }

// var i=0;
// do{
//     document.write(" "+i);
//     i++;
// }while(i<=6);

// var i=10;
// document.write(++i);
// document.write(i);

// var i=2, j=8;
// document.write(i<<j);

//Hoisting only works for var and function and doesn't woek for let / const.
// var favFood="biryani";
// var foodthought= function(){
//     console.log("original choice "+favFood);
//     favFood= "phuchka";
//     console.log("new choice "+favFood);
// }
// foodthought();

// var name = "Sharmili";
// console.log(`${name} is 20 years old`);

// var fruits={
//     'mango':'yellow', 'apple':'red'
// };
// document.write(fruits['mango']);

// var fruits={
//     mango:'yellow', apple:'red',
// color(){
//     console.log("Mango is "+this.mango);
// }
// }
// fruits.color()

// let animal= new Object();
// let cat= animal;
// let dog= animal;
// JSON.stringify(cat)==JSON.stringify(dog)


// var arr=[1,"q",2];
// function print(arr){
//     console.log(arr);
// }
// console.log(arr[1]);
// arr.push(3);
// console.log(arr);
// arr.pop(3);
// console.log(arr);
// arr.shift(4);
// print(arr);
// arr.unshift(4);
// print(arr);
// print(arr.length);
// arr.splice(0,1,"hey");
// print(arr);

// let arr1= arr.slice(1,2);
// print(arr1);

//Printing array
// var arr=[2,3,5,6,7];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]+" ");
// }
// arr.forEach(item => console.log(item+" "));

// var a = 10;
// console.log( typeof(typeof(a)));

// function greet(name, greetText){
//     console.log(greetText+" "+name);
// }
// let greetText="Hi";
// let name="Sharmili";
// let name2="Soham";
// greet(name, greetText);
// greet(name2, greetText);

// let friends=["Sharmili","Mithai","Moly"];
// friends.forEach(function f(element){
//     console.log("hi "+ element);
// });
// for(i of friends){
//     console.log("Hi"+ i);
// }
// let friends={
//     friend1: "Sharmili",
//     friend2: "Moly",
//     friend3: "Mithai",
// }
// for(var j in friends){
//     console.log(`${friends[j]}`);
// }
