import express from "express";
import cors from "cors";
import { routerLivro } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());

routerLivro(app);

app.get("/", (req, res) => {
  res.json("Bem vindo a API de Livros!");
});

export { app };
