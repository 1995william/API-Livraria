import { app } from "./app";

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso http://localhost:${PORT}/`);
});

process.on("SIGINT", () => {
  server.close();
  console.log("App Finalizado!");
});
