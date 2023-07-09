function first(){
    var myName = 'Rick';
    if(myName !== 'Tom'){
        myName = 'Tom';
    }
    console.log(myName);
}

//output:- Tom

var lastName = 'Sekuloski';
function second(){
    lastName = 'Cruise';
}

//output:-undefined

function third(){
    console.log(lastName);
}
//output:-sekuloski

function fourth(){
    firstName = 'Jason';
}

//output:-Cruise