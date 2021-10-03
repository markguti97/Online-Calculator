const fs = require("fs");
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen("5000");



app.get("/loadin", (req, res) => {

    let indexPath = path.join(__dirname, 'savednumber.json');

    fs.readFile(indexPath, (err, file) => {
        res.send(file);
        res.end()
    })
});

app.post("/store", bodyParser.json(), (req, res) => {
    
    let indexPath = path.join(__dirname, 'savednumber.json');
    let newNumber = req.body.savedNumber

    fs.readFile(indexPath, (err, file) => {
        let number = JSON.parse(file);

        number.savedNumber = newNumber;

        fs.writeFile(indexPath, JSON.stringify(number), err =>{
            res.send(file);
            res.end()
        })

    })
})