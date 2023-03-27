import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { cyan, cyanBright } from "cli-color";

// custom imports
import routes from "./routes";
import sequelizeConnection from "./config";
import authMiddleware from "./middleware/auth.middleware";

dotenv.config();

// variable constants
const NODE_LOCAL_PORT = process.env.NODE_LOCAL_PORT;
// const corsOptions = {
//   origin: `http://127.0.0.1:5173`,
// };

export const get = () => {
  const app: Application = express();
  app.use(cors());

  // Body parsing Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
      message: `Welcome to the Backend Assignment API! Endpoints available at http://localhost:${NODE_LOCAL_PORT}/api/v1`,
    });
  });

  app.get("/protected", authMiddleware, (req: Request, res: Response) => {
    return res.status(200).json({ message: `Hello, ${req.body?.email}` });
  });

  app.use("/api/v1", routes);

  sequelizeConnection
    .sync({ force: true })
    .then(() => {
      console.log(cyan("Database successfully connected!"));
    })
    .catch((err) => {
      console.log("Error", err);
    });

  return app;
};

export const start = () => {
  process.on("uncaughtException", function (err) {
    console.log(err);
  });
  const app = get();
  try {
    // listen for requests
    app.listen(NODE_LOCAL_PORT, () => {
      console.log(
        cyanBright(
          `⚡️[server]: Server is running at https://localhost:${NODE_LOCAL_PORT}`
        )
      );
    });
  } catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
  }

  return app;
};

export default start();
