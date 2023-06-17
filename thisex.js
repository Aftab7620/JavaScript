let cars={
    name:"Maruti",
    show(){
        console.log("name of car :" +this.name)
    }
}
let car= cars.show();


//ex2
function cr(name){
    this.name=name;
    this.show=function(){
            console.log("name of car :" +this.name)
            console.log(this);
        }
}

let swift=new cr('swift');

swift.show();