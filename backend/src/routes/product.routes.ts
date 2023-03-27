import { Router } from "express";

import productController from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/", productController.productCreator);
productRouter.get("/", productController.productFetcher);


export default productRouter;
