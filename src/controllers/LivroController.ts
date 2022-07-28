import { Response, Request } from "express";

export class LivroController {
  static getAll = (req: Request, res: Response) => {
    let db = ["Livro 1"];

    res.status(200).json(db);
  };

  static getOne = (req: Request, res: Response) => {
    const { id } = req.params;

    res.status(200).json({ Livro: id });
  };

  static register = (req: Request, res: Response) => {
    const jsonBody = req.body;

    res.status(201).json({ "Livro cadastrado": jsonBody });
  };
  
  static update = (req: Request, res: Response) => {
      const { id } = req.params;
      const jsonBody = req.body;

    res.status(200).json({ "Livro atualizado": id });
    console.log(jsonBody)
  };

  static delete = (req: Request, res: Response) => {
    const { id } = req.params;
    
    res.status(200).json({ "Livro deletado": id });
  };
}
