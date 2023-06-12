//This is an Exercise in javascript where we need to take input from user 
//create one functin and take input as profession ,age , workexp using prompt function
//after taking input make a new function for displaying the output if work exp is more than 5 consider it as senior.

var Detail=function(prof,ag,exp){
    console.log('Profession is :' +prof);
    console.log('Age :' +ag);
    console.log('Experience :' +exp);
    if (exp>5)
    {
        console.log('Yor are a Senior');
        return;
    }
    else{
        console.log('You are a junior');
        return;
    }

}

function details(){
    var profession=prompt('what is your professeion');
    var age=prompt('what is your age');
    var experience=prompt('what is your workexperience');
    Detail(profession,age,experience);
}
details();