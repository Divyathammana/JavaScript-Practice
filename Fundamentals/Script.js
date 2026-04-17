// const obj = {
//     id: 1,
//     name: "John"
// };

// console.log(obj.loc);   // undefined

// obj.loc = "USA";        // adding new property

// console.log(obj);       // updated object

// const user = [
//     {
//         id: 1,
//         name: "Alice",
//         loc: "UK"
//     },
//     {
//         id: 2,
//         name: "DT",
//         loc: "US"
//     }
    
// ];

// console.log(user);

// function myFunc() {
//     console.log("Hello World");
// }

// myFunc();

// function myFunc2() {
//     return "Hello";
// }

// console.log(myFunc2);

// function myFunc3(a, b) {
//     return a + b;
// }

// console.log(myFunc3(5, 10));

// function myFunc4(a, b) {
//     return a * b;
// }

// // let a=prompt("Enter a number"); //takes input as string
// // let b=prompt("Enter another number");

// // console.log(myFunc4(a, b));

// // let c=Number(prompt("Enter a number")); //takes input as string and converts it to number
// // let d=Number(prompt("Enter another number"));

// // console.log(myFunc4(c, d));

// //anonymous function
// const Func = function(num1,num2){ //function without name
//     return num1-num2;
// }
// console.log(Func(10,2));


// //arrow function
// const Func2 = (num1,num2) => num1/num2; //function without name
// console.log(Func2(10,2));

// //create a calculator using functions and switch case
// function cal(a,b,op)
// {
//     switch(op)
//     {
//         case '+':
//             return a+b;
//         case '-':
//             return a-b;
//         case '*':
//             return a*b;
//         case '/':
//             return a/b;
//         case '%':
//             return a%b;
//         case '**':
//             return a**b;
//         default:
//             return "Invalid Operator";
//     }

// }

// console.log("The Addition of 10 and 5 is: " + cal(10,5,'+'));
// console.log("The Subtraction of 10 and 5 is: " + cal(10,5,'-'));
// console.log("The Multiplication of 10 and 5 is: " + cal(10,5,'*'));
// console.log("The Division of 10 and 5 is: " + cal(10,5,'/'));
// console.log("The Modulus of 10 and 5 is: " + cal(10,5,'%'));
// console.log("The Exponentiation of 10 and 5 is: " + cal(10,5,'**')); 



// DAY 2


//  let name="Divya";
//  let age="25";
//  console.log(`My name is ${name} and I am ${age} years old.`); //template literals ${} is called interpolation.

//  let a=5;
//  let b=10;
//  console.log(`The sum of ${a} and ${b} is ${a+b}.`); //template literals ${} is called interpolation.   


//  function greet(name)
//  {
//     return `Hello, ${name}!`;
//  }
// console.log(greet("Divya"));


//Dom manipulation in js

// console.log(document.body); //to access the document object

// let Tadaa=document.getElementById("Tadaa"); //to access the element with id "Tadaa"

// Tadaa.innerText = "This is a fun class"; //to change the text of the element with id "Tadaa"

// Tadaa.innerHTML = "<h1>This is a fun class</h1>"; //to change the html of the element with id "Tadaa"

// let data=document.getElementsByClassName("data"); //to access the element with class "data"

// console.log(data); //to print the element with class "data"

// let box=document.getElementsByClassName("box"); //to access the element with class "box"

// console.log(box); //to print the element with class "box"

// let para=document.getElementsByClassName("para"); //to access the element with class "para"

// console.log(para); //to print the element with class "para"

// box[0].innerText = "This is a box1"; //to change the text of the first element with class "box"

// para[0].innerHTML = "<p>This is a paragraph tag</p>"; //to change the html of the first element with class "para"


// let div=document.getElementsByTagName("div"); //to access the element with tag name "div"

// console.log(div); //to print the element with tag name "div"


//DAY 3
//events

const changeText = () => {
    let display=document.getElementById("display");
    //display.innerHTML= display.innerHTML==="HELLO"? "Bye" : "HELLO"; //to change the html of the element with id "display" when the button is clicked


    if(display.innerHTML==="HELLO")
    {
        display.innerHTML="Bye";
    }
    else
    {
        display.innerHTML="HELLO";
    }
}; //to change the html of the element with id "display" when the button is clicked
//onclick is an event that is triggered when the button is clicked




