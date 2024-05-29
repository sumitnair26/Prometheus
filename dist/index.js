"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//Midleware to track time taken by API
//@ts-ignore
function middleware(req, res, next) {
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log('it took', endTime - startTime, 'ms');
}
app.use(middleware);
app.get("/user", (req, res) => {
    let user = {
        name: "Sumit",
        age: 20
    };
    //some expensive DB operation come here 
    res.json({
        name: "Sumit"
    });
});
app.post("/user", (req, res) => {
    res.json({
        name: "Sumit"
    });
});
app.listen(3000);
