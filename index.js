const express=require("express");
const app=express();
const port=7080;
const path=require("path");


app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})
