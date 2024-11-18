
var users = [{
    name: "maitry",
    age: "23",
    kidneys: [{
        healthy: false,
    }]
}]
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", function(req, res) {
    const kidneys = users[0].kidneys;
    const kidneysOfLength = kidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < kidneys.length; i++){
        if (kidneys[i].healthy) {
            console.log("Hello")
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }
    const numberOfUnhealthyKidneys = kidneysOfLength - numberOfHealthyKidneys;
    console.log("Number of Healthy Kidneys: " + numberOfHealthyKidneys);
    console.log("Number of Unhealthy Kidneys: " + numberOfUnhealthyKidneys);

    res.json({
        kidneysOfLength,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res){ 
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    console.log(users[0].kidneys);
    res.json({
        "msg": "Done!"
    })
})

app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

//Removing all the unhealthy kidneys
app.delete("/", function(req, res) {
    newKidneys = []
    for(let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        "msg": "done!"
    })
})

app.listen(3000);
