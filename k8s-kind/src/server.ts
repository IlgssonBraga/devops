import express from "express";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { join } from "path";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  const data = readFileSync(join(__dirname, "../myfamily/myfamily.txt"), {
    encoding: "utf8",
    flag: "r",
  });
  return res.send(`<h1>Hello, ${process.env.NAME}!!!</h1> 
  <h3>Membros da família</h3>
  ${data}`);
});

app.get("/secret", (req, res) => {
  const user = process.env.USER;
  const password = process.env.PASSWORD;
  return res.send(`User: ${user} <br/> Password: ${password}`);
});


app.listen(3333);
 