const greet=(name, greeting)=> console.log(greeting+ " "+ name);
greet("Sharmili","Good morning ")

const a={
    name:"Sharmili", 
    role: "Software developer",
    show: function(){
        let that = this;
        console.log(this);
        setTimeout(function(){
            console.log(`${that.name}`)
            console.log(a.name+" is a "+ a.role);
        }, 1000);
    }
}
a.show()
