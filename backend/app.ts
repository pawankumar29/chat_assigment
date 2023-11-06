import express from "express";
import dotenv from "dotenv";
import sleepRouter from "./modules/sleep/sleep.router";
import cors from "cors";
import http from 'http';
import "./db/association";
import { intializeSocketServer } from "./socket/chatServer";
import authRouter from "./modules/authentication/auth.router";
import validateToken from "./middleware/auth.middleware";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.use("/v1", authRouter);

app.use("*", validateToken);
app.use("/v1", sleepRouter);
const server = http.createServer(app);
intializeSocketServer(server); //initialize socket server 

server.listen(5166, () => {
    console.log("app is listening at 5166")
})


//docker-compose build sleep_task && docker-compose up -d sleep_task && docker logs -f sleep_task --tail 20

//123

