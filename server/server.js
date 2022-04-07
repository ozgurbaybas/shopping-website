import  express from "express";
import  products from "./data/Products.js";

const app = express()

//Load Product From Server.
app.get("/api/products", (req, res) => {
    res.json(products)
});

app.get("/", (req, res) =>{
    res.send("WebApi is Running...");
});

app.listen(5000, console.log("Server Running..."));