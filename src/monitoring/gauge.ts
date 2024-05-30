// Mostly used to monitor Webservers 
import client from "prom-client";

const activeUserGauge = new client.Gauge({
    name: "active_users",
    help: "Total active users whose request has not yet resolved",
    labelNames: ["method", "route"]
});
//@ts-ignore
export const requestCount = (req, res, next) => {


    activeUserGauge.inc({
        method: req.method, // GET, POST
        route: req.path //route
    });

    res.on("finish", ()=>{
        activeUserGauge.dec({
            method: req.method,
            route: req.route ? req.route.path: req.path
        })
    })
    next();
} 