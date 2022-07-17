//jshint version 6
const express = require('express');
const app = express();

app.get("/", function(request, response){
response.send("<h1>Hellooo!!</h1>");
}); // "/" route of the website, basically homepage

app.get("/about", function(req, res){
    res.send("<div> Hi, I'm a webDeveloper</div>")
}) // "/about" route of the about age in othe website

app.get("/contact", function(req, res){
    res.send("<div> contact mee @ gmail.com</div>")
}) // "/contact" route of the about age in othe website


app.listen(3000, ()=>{console.log("server started at node 3000")});
 