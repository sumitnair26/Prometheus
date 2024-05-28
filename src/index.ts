import express from "express";
const app = express();

app.get("/user", (req, res)=>{
    res.json({
        name:"Sumit"
    })
})

app.post("/user", (req, res) =>{
    res.json({
        name:"Sumit"
    })
})