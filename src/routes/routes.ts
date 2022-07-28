import { Express } from "express";
import { LivroController } from "../controllers/LivroController";

export const routerLivro = (app: Express) => {

  app.get("/livros", LivroController.getAll);
  app.get("/livros/:id", LivroController.getOne);
  app.post("/livros", LivroController.register);
  app.patch("/livros/:id", LivroController.update);
  app.delete("/livros/:id", LivroController.delete);
};
