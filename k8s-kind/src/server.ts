import express from "express";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { join } from "path";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  //   const greetings = `<h1>Hello, ${process.env.NAME}!!!</h1>`;
  const data = readFileSync(join(__dirname, "../myfamily/myfamily.txt"), {
    encoding: "utf8",
    flag: "r",
  });
  return res.send(`<h1>Hello, ${process.env.NAME}!!!</h1> 
  <h3>Membros da família</h3>
  ${data}`);
});

app.listen(3333);
 