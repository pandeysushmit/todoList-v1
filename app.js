const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
var items=[];
app.get("/", function (req, res) {
    var today = new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day=today.toLocaleDateString("hi-IN",options);
    // var currDay = today.getDay();
    // var day = "";
    // switch (currDay) {
    //     case 0: day="Sunday";
    //         break;
    //     case 1: day="Monday";
    //         break;
    //     case 2: day="Tuesday";
    //         break;
    //     case 3: day="Wednesday";
    //         break;
    //     case 4: day="Thursday";
    //         break;
    //     case 5: day="Friday";
    //         break;
    //     case 6: day="Saturday";
    //         break;
    //     default:
    //         console.log("Gazab ka hai ye din!");

    // }
    // if (currDay === 6 || currDay === 0)
    //     day = "Weekends";
    // else
    //     day = "Weekdays";
    res.render("list", { listTitle: day, newItem:items });
})
app.get("/work",function(req,res){
    
})
app.post("/",function(req,res){
    var item=req.body.newItem;
    // console.log(item);
    items.push(item);
    res.redirect("/");
})
app.listen(3000, function () {
    console.log("Server Started on Port 3000");
})