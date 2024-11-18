import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config({});
const app = express();
const PORT = process.env.PORT || 3000;

// default middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:8080",
    credentials: true
}))


// api

app.use("/api/v1/user", userRouter);
app.get('/', (req, res)=>{
    res.send("hello");
})
app.listen(3000, () => {
    console.log(`server is running at ${PORT}`);
    connectDB();
});