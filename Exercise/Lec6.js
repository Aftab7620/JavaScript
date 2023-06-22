//ARRAY EXERCISES, USE CONSOLE LOG TO PRINT THE RESULT
//USE THE FOLLOWING ARRAY
var cars = ["Saab", "Volvo", "BMW","Audi","Tesla","Ford","Lexus","HSV","Toyota","Chevrolet"];

//0) Sort Array
//1) Remove the First Item from the array and store it in a variable
//2) Remove the Last Item From the array and store it in a variable
//3) Remove Ford from the array and store it in a variable
//find out the method that do this online and this returns an array back like this ["Ford"]
//4)  Add Audi, Volvo and the returned Ford array in new array called cars1
//5) Access Ford from cars1
//6) Save now the ford item into a variable
//7) Add Audi, Volvo and the Ford now to the original cars array
//8) Sort the original cars array in reverse order



cars.sort();
console.log(cars);

//1
var Audi=cars.shift();
console.log(cars);
console.log(Audi);

//2
var Vol=cars.pop();
console.log(Vol);
console.log(cars);

//3
var ford=cars.splice(2,1);
console.log(ford);

//4
var car1=["audi","volvo","ford"];
console.log(car1);

//5
console.log(car1[2]);

//6
var fd=console.log(car1[2]);

//7
cars.push("audi");
cars.push("volvo");
cars.push("ford");
console.log(cars);

//8
cars.reverse();
console.log(cars);
