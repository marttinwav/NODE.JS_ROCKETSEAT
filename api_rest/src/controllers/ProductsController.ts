import { Request, Response } from "express"
import { AppError } from "../utils/AppError";

class ProductsController {
  index(req: Request, res: Response) {
     const { page, limit } = req.query;
    
      res.send(`Pagina ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
     const { name, price } = req.body;

      if (!price) {
        throw new AppError("O preço do produto é obrigatório");
      }
     if (name.trim().length < 6) {
      throw new AppError ("Nome do produto precisa ter pelo menos 6 caracteres!")
      
     }
     if (!price) {
      throw new AppError ("O preço do produto é obrigatório")
      
     }

     // throw new Error("Erro ao executar o servidor!")

     //throw new AppError("Erro ao tentar criar um produto!")

     res.status(201).json({ name, price, user_id: req.user_id });
  }
}

export {ProductsController}