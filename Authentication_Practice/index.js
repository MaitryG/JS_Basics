// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());
// let ALL_USERS = [
//     {
//         username: "maitrygajiwala@gmail.com",
//         password: "123",
//         name: "maitry gajiwala",
//     },
//     {
//         username: "hely@gmail.com",
//         password: "123",
//         name: "hely gajiwala",
//     },
//     {
//         username: "rudra@gmail.com",
//         password: "123",
//         name: "rudra gajiwala",
//     },
//     {
//         username: "liza@gmail.com",
//         password: "123",
//         name: "liza gajiwala",
//     },
//     {
//         username: "nikunj@gmail.com",
//         password: "123",
//         name: "nikunj gajiwala",
//     }
// ];

// function userExists(username, password){
//     let userExists = false;
//     for (let i = 0; i < ALL_USERS.length ; i++) {
//         if (ALL_USERS[i].username == username && ALL_USERS[i].password == password){
//             userExists = true;
//         }
//     }
//     return userExists;
    
// }
// app.post("/signin", function(req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (!userExists(username, password)) {
//         return res.status(403).json({
//             msg: "Username doesnt exist in our in memory db",
//         });
//     }

//     var token = jwt.sign({username: username}, jwtPassword);
//     return res.json({
//         token,
//     });
// });
// app.get("/users", function(req, res){
//     const token = req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         res.json({
//             users: ALL_USERS.filter(function(value) {
//                 if (value.username == username){
//                     return false;
//                 }else{
//                     return true;
//                 }
//             })
//         })
//     } catch(err) {
//         return res.status(403).json({
//             msg: "Invalid Token",
//         });
//     }

// })

// app.listen(3000);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.t1twl.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String, email: String, password: String });


const user = new User({ 
    name: 'maitrygajiwala', 
    email: 'maitry@gmail.com', 
    password: '1234' });
user.save();

const jwt = require("jsonwebtoken");
