const express= require("express");
const bodyParser= require("body-parser");
const date=require(__dirname + "/date.js")
const app=express();
let items=["Buy food","Cook food","Eat food"];
let workItems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function (req,resp) {
    let day=date.getDay();
    resp.render("list",{listTitle:day,newListItems:items});
});


app.post("/",function (req,resp) {
    let item =req.body.New_item;
   // console.log(req.body.list);
    if(req.body.list==="work"){
        workItems.push(item);
        resp.redirect("/work");
    }else{
        items.push(item);
        resp.redirect("/");
    }



});

app.get("/work",function (req,resp) {
resp.render("list",{listTitle:"work",newListItems:workItems});
});

app.get("/about",function (req,resp) {
resp.render("about");
});


app.listen(process.env.PORT||3000,function (req,resp) {
console.log("server is running at port 3000");
});
