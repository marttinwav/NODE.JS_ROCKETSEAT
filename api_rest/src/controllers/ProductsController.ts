import { Request, Response } from "express"
import { AppError } from "../utils/AppError";
import { z } from "zod"
class ProductsController {
  index(req: Request, res: Response) {
     const { page, limit } = req.query;
    
      res.send(`Pagina ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    
     const bodySchema = z.object({
      name: z
      .string({required_error: "Name is required!"})
      .trim()
      .min(6, {message: "Name must be 6 or more characters"}),
      price: z.number({required_error: "Price is required!"})
      .positive(),

     })

     const {name, price} = bodySchema.parse(req.body)

     // throw new Error("Erro ao executar o servidor!")

     //throw new AppError("Erro ao tentar criar um produto!")

     res.status(201).json({ name, price, user_id: req.user_id });
  }
}

export {ProductsController}