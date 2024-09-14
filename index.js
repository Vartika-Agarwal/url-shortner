const express = require("express");
const path = require("path");


const staticRoute = require("./routes/staticRoute");
const urlroute = require("./routes/url");
const {connectMongoDb} = require("./connection");

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 7001;
app.use("/url", urlroute);


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use("/",staticRoute);




connectMongoDb("mongodb://localhost:27017/shorturl").then(()=>console.log("connection successful"));




app.listen(PORT,()=>console.log(`server started at port :${PORT}`));