import express from "express";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { join } from "path";
dotenv.config();
const app = express();

const startExecDate = Date.now();

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

app.get("/healthz", (req, res) => {
  if ((Date.now() - startExecDate) / 1000 < 10) {
    res.status(500).json({ error: "Passou de 25 segundos" });
  } else {
    res.send(
      `Execução iniciada em: ${startExecDate} <br/> Tempo agora: ${Date.now()} <br/>
      Diferença: ${(Date.now() - startExecDate) / 1000} segundos
      `
    );
  }
});


app.listen(3333);
 