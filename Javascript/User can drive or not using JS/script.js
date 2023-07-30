let runAgain= true;
do{
    let age= prompt("Enter your age: ");
    age= Number.parseInt(age);
    if(age<0){
        console.error("Please enter a valid age");
        break;
    }
    function canDrive(){
        if(age<18){
            alert("You cannot drive");
        }
        else if(age=>18 && age<=80){
            alert("You can drive");
        }
        else{
            alert("You cannot drive");
        } 
    }
canDrive();
let confirmation = confirm("Do you want to run the program again?");
    if(!confirmation){
        runAgain=false;
    }
}while(runAgain);
