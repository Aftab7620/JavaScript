

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