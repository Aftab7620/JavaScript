function first(){
    var myName = 'Rick';
    if(myName !== 'Tom'){
        myName = 'Tom';
    }
    console.log(myName);
}

var lastName = 'Sekuloski';
function second(){
    lastName = 'Cruise';
}

function third(){
    console.log(lastName);
}

function fourth(){
    firstName = 'Jason';
}
