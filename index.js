import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//routes

app.use("/api/product", productRoute);




mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to Database!");
    app.listen(port, () => {
        console.log(`Example app listening on port: http://localhost:${port}`);
    })
})
.catch(() => {
    console.error(`Error connecting to Database`);
})