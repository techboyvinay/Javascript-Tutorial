//1.ways to print in javascript
//console.log("Hello World");
//alert("me");
//document.write("this is document")

//2.javascript console API
//console.log("hallo world", 4 + 6, "another log");
//console.warn("this is warning");
//console.error("this is an error");


//3. jvavascript varibles
//what are varibles? - containers to store data values

/*
Multi 
line 
comment
*/ 

var number1 = 34;
var number2 = 56; 
//console.log(number1 + number2);

//4. Data types in javascript
//Numbers
var num1 = 455;
var num2 = 56.76; 

//stings
// var str1 = "this is a string";
// var str2 = 'This is also a string';

// //objects
// var marks = {
//     ravi: 34,
//     subham: 78,
//     harry: 99.977
// }
// console.log(marks);

// //Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// //var und = undefined;
// var und;
// //console.log(und);

// var n = null;
//console.log(n);

/*
At a very high level, there are two types of data types in javascrtipt 
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects

*/

var arr = [1, 2, "rocky", 4, 5]
//console.log (arr)

//operators in java script

var a = 100;
var b = 10;
//console.log("the value of a + b is", a+b);
//console.log("the value of a - b is ",a-b);
//console.log("the value of a * b is",a*b);
//console.log("the value of a / b is", a/b);

//Assigment operators
//var c = b;
//c += 2;
//c -= 2; //c = c - 2;
//c *= 2;
//c /= 2;
//console.log(c);

// Comparison operators

var x = 34;
var y = 56;
// console.log(x == y);
//console.log(x <= y);
//console.log(x >= y);
//console.log(x < y);
//console.log(x > y);

// Logical Operators

//lpgical and
// console.log(true && true)
// console.log(true && false)
// conssole.log(false && true)
// console.log(false && false)

// logical or
// console.log(true || true)
// console.log(true || false)
// conssole.log(false || true)
// console.log(false || false)

//logical not
//console.log(!false);
//console.log(!true);

//functions in javascript
// Dry = do not repeat yourself

function avg(a,b){
    c = (a + b)/2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1, c2);

/*
var age = 41;
// singal if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
//if (age > 18){
//console.log('you can drink rasna water');
// }
// else{
//     console.log('you cannot drink rasna water');
// }
age = 25;

// if-else ladder
if(age >32){
    console.log("you are not a kid")
}
else if(age >26){
    console.log("Bachhe nahi rahe");

}
else if(age >22){
    console.log("yes bachhe nahi rahe");
}
else if(age>18){
    console.log("18 bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("end of ladder");

*/
var arr = [1 ,2, 3, 4, 5, 6, 7];
// console.log(arr);
//  for(var i=0;i<arr.length;i++){
//          if(i==2){
//             // break;
//             continue;
//          }
     
//      console.log(arr[i])
//     }

// arr.forEach(function(element){
//     console.log(element);

// })
// let j=0;
// const ac = 1;
// ac++;
// ac = ac +1;
let j = 10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
//   }  while (j< arr.length);


let myArr = ["fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
//myArr.push("Rocky")
// myArr.shift();

// const newlen = myArr.unshift("rocky")
// console.log(newlen);
// console.log(myArr);

//String Methods in java script
let myLovelyString = "Rocky is a good boy good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(1, 4));
d = myLovelyString.replace("Rocky", "Harry");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DoM Munipulation
let elem = document.getElementById('click');
console.log(elem);

let elemclass = document.getElementsByClassName
console.log(elemclass);











