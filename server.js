// const person1 = "Maitry";
// const gender1 = "female";

const { resourceUsage } = require("process");

// const person2 = "Rudra";
// const gender2 = "male";

// const personArray = ["Maitry", "Rudra", "Hely"]
// const genderArray = ["female", "male", "female"]
// const users = [{
//     firstname: "Maitry",
//     gender: "female",
// },  {
//     firstname: "Hely",
//     gender: "female",
// }, {
//     firstname: "Rudra",
//     gender: "male",
// }]

// for (let i = 0; i < users.length; i++){
//     if (users[i].gender == "female"){
//         console.log(users[i].firstname);
//     }
// }

// function findSum(a, b){
//     return a+b;
// }

// function sum(num1, num2, funToCall){
//     let result = num1 + num2;
//     displayResult(result);
// }

// function displayResult(data){
//     console.log("Result: " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is: " + data);
// }


// function helloworld(){
//     console.log("Hello world");
// }

// setInterval(helloworld, 3*1000)


// function counter(){
//     console.log(Date.now());
//     for(let i = 30; i >= 0 ; i--){
//         console.log(i);
//     }
//     // const dt = new Date();
//     // console.log(dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds());
// }
// setInterval(counter, 1000)


// console.log(Date.now())
// setTimeout(counter, 1*1000);

//Asynchronous functions
// const { log } = require("console");
// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log(data);
// })

// console.log("Maitry");

//Promises
// function findSum(n){
//     let ans = 0;
//     for(let i = 0 ; i < n ; i++){
//         ans+=i
//     }
//     return ans;
// }

// function findSumTill100(){
//     return findSum(100);

// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello World");

// //Promises are syntactiacal sugar to make the above code pretty.

// const fs =  require("fs");
// function readFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data);
//         }); 
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// readFile().then(onDone);

const express = require("express");
const { log } = require("console");
const app = express();
const port = 3000;
app.get('/', function(req, res) {
    res.send("<b>Hello world!</b>");
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
})

app.post('/conversations', function(req, res) {
    console.log(req.headers['authorization']);
    res.send('Hi there!');
})