import express, { Request, Response } from "express";
import authRouter from "./auth.routes";
import categoryRouter from "./category.routes";
import productRouter from "./product.routes";

const routes: express.Router = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("There will be a list of all the available routes here!");
});

routes.use("/products", productRouter);
routes.use("/categories", categoryRouter);
routes.use("/login", authRouter);

export default routes;
