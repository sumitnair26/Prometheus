import express from "express";
const app = express();

//Midleware to track time taken by API

//@ts-ignore
function middleware(req, res, next) {
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log('it took', endTime - startTime, 'ms');
}
app.use(middleware);

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

app.listen(3000);