
// //Declaration of an array
// var FirstArray=[1,2,3,4];
// console.log(FirstArray);

// //mix array
// var Second=[1,2,'Aftab','Khan'];
// console.log(Second);
// console.log(Second[2]);

// var third=[1,[2,7,5,8]];
// console.log(third);
// console.log(third[1][2]);

// //shift array
// var New=['AFTAB','KHAN','SHAHRUKH','KHAN'];
// var af=New.shift();
// console.log(New);
// console.log(af);


// //unshift
// //New.unshift();
// console.log(New);

// //slicing
// console.log(New.slice(1,3));

// //for loop
// for(let i=0;i<New.length;i++){
//     console.log(New[i]);
// }

// const Ar=["Aftab","Khan","Mca","Rcoem","Nagpur"];
// for(let i=0;i<Ar.length;i++){
//     console.log(Ar[i]);
// }


// //for-each
// Ar.forEach(function(Ar,index){
//     console.log(Ar,index);
// })


// //join
// let joins=['A','F','T','A','B'];
// let join1=console.log(joins.join('_'));

// //split
// //onsole.log(join1.split('_'));



// //filter
// let cities=[
//     {names:'Nagpur',population:150000},
//     {names:'Mun',population:180000},
//     {names:'del',population:250000},
//     {names:'kanpur',population:100000},
//     {names:'Nagpuri',population:210000},
// ]
// //console.log(cities.filter(city=>city.population>200000));

// //map
// console.log(cities.map(city=>city.population*2));
// //unshift array
// New.unshift();
// console.log(New);
// console.log("Hello world!");


function Car(name){
    name=name,
    start(){
        console.log( name,"start");
    }
}
const car=new Car('swif');
console.log(start());