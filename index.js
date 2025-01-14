// //Practicing middleware
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.post("/health-checkup", function (req, res) {
//     const kidneys = req.body.kidneys;
//     const kidneysLength = kidneys.length;

//     res.send("you have " + kidneysLength + " kidneys");

// });

// app.listen(3000);

//Practicing zod
const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

//Zod schema for an array of numbers
// const schema = zod.array(zod.number());


//Zod schema for email, password(atleast 8 characters long), country: "IN", "US"
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})


function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid"
        })
    }
    res.send({
        response
    })

})

app.post("/login", function(req, res) {
    const response = validateInput(req, res);
    if(!response.success){
        res.json({
            msg: "Your inputs are invalid"
        })
    }
    return;
})

app.listen(3000);
