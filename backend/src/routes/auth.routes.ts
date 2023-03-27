import { Router } from "express";

import authController from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/", authController.login);
authRouter.get("/", authController.userFetcher);

export default authRouter;
