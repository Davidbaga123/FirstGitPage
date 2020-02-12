//  var a =10;
//  var b =20;
//  var c =a+b;


//  console.log(c);


//  var name = 'luka';
//  var age = '10';
//  var location = 'bokkos';

//  console.log('my name is' + name +' and i am' + age +'years old and i stay in' + location);

//  console.log(`my name is ${name} and i am ${age} years old my location is bokk0s` )
//  var a=4;
//  var b=2;
//  var c=6;
//  var x=a*(b+c);
//  console.log(`x=${x}`);



// //  =======DATA TYPE=====
// //======STRINGS''||''NUMBER

// console.log("welcome" + " to nHub.");
// var a = 12;
// var b = "books";
// var d =4;
// // var c = a + b + d;
// // var c = a + b + b;
// var e = b + a + d;
// var e = b + a + d;

// //console.log(c);
// console.log(e);



// //-----object-good for strings and smaller ----
 
// // var projector={
// //     color:"black"
// //     price: 120000,
// //     type: "dell"
// // }


// var person ={
//     name:"john",
//     age:16,
//     height:6,
//     complexion:"black",
//     location:"jos"   
// }
// var car = {
//     color: "blue",
//     model: 2020,
//     price: 2000000,

// }
// var johnHouse = {
//     location:"rayfield",
//     type: "duplex",
//     color: "grey",
// }

// var johnProps = `my name is ${person.name} and i am ${person.age} years old.`;
// var car = `I have a ${car.model}  model car which costs ${car.price} naira`;

// console.log(join);
// // var x = 2
// // var y = x + projector.price;
// // console.log(projector);
// // console.log(project.price);
// // console.log(y);
// // console.log(person);


// // ======== Array
// var x =[391,392,120,70,492];
// console.log(x)
// console.log(x[0])
// console.log(x.lenght);
// var y = x.pop();
// console.log(x)
// console.log(y);
// var z = x.push(`push`);
// console.log(x)
// var e = x.splice(0,2, 'hi', 'hello');
// console.log(x)

// // ===========type of===================================================
// var a = typeof "my name" + "..." + typeof 4 + ".." + typeof false + "..." + typeof + (1,2,4) + "..." + typeof {name:'clef', age:12};
// console.log(a);



// ===================FUNCTIONS=========================================

// function funName(){
//     var x = 3;
//     var y = 7;
//     var z = x+y;
//     return z;
// }
// var result = funName();
// console.log(result);
// document.write(result)

// function funName(one,two){
//     var sum = one + two;
//     return sum;
// }
// var result = funName(13,);
// console.log(result);
// document.write(result)
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    var lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('KgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
})