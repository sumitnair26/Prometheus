import express from "express";
import { requestCount } from "./monitoring/requestCount";
import client from "prom-client";
const app = express();

// //Midleware to track time taken by API
// //@ts-ignore
// function middleware(req, res, next) {
//     const startTime = Date.now();
//     next();
//     const endTime = Date.now();
//     console.log('it took', endTime - startTime, 'ms');
// }
// app.use(middleware);

app.use(requestCount);

app.get("/user", (req, res)=>{
    let user = {
        name: "Sumit",
        age:20
    }
    //some expensive DB operation come here 
    res.json({
        name:"Sumit"
    })
})

app.post("/user", (req, res) =>{
    res.json({
        name:"Sumit"
    })
})

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(3000);