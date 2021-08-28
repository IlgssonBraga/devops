import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => res.send(`<h1>Hello, ${process.env.NAME}!!!</h1>`));

app.listen(3333);
 