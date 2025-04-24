import express, {Request, Response, NextFunction} from "express"
import { routes } from "./routes"
import { AppError } from "./utils/AppError"
import { ZodError } from "zod"
const PORT = 3333

const app = express()
app.use(express.json())

app.use(routes)

app.use((error: any, _req:Request, res: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ message: error.message });
    } 

      if (error instanceof ZodError) {
        res.status(400).json({message: "Validation error!", issues: error.format()})
      }

    res.status(500).json({message: error.message})
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))