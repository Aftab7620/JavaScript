//if Statement,if else,else if
var num=16;
var num2=234;
var num3=55;
if(num>num2)
{
    console.log("Num1 is grater than num2 ");
}
else if(num>num3)
{
    console.log("Num1 is greater trhan num3");
}
else
{
    console.log("Num2 is smallest among all");
}


// switch case
var letter=prompt("Enter Alphabet");

switch(letter)
{
    case 'a':
        alert("A is a vowel");
        console.log("A is a vowel");
        break;
    case 'e':
        alert("E is a vowel");
        console.log("e is a vowel");
        break;
    case 'i':
        alert("I is a vowel");
        console.log("i is a vowel");
        break;
    case 'o':
        alert("O is a vowel");
        console.log("o is a vowel");
        break;
    case 'u':
        alert("U is a vowel");
        console.log("u is a vowel");
        break;
    default:
        alert(letter + " is Consonant");
        console.log(letter +" is consonants");

   
}