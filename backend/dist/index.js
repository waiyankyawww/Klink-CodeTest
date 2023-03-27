"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.get = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cli_color_1 = require("cli-color");
// custom imports
const routes_1 = __importDefault(require("./routes"));
const auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
dotenv_1.default.config();
// variable constants
const NODE_LOCAL_PORT = process.env.NODE_LOCAL_PORT;
// const corsOptions = {
//   origin: `http://127.0.0.1:5173`,
// };
const get = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    // Body parsing Middleware
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        return res.status(200).send({
            message: `Welcome to the Backend Assignment API! Endpoints available at http://localhost:${NODE_LOCAL_PORT}/api/v1`,
        });
    }));
    app.get("/protected", auth_middleware_1.default, (req, res) => {
        var _a;
        return res.status(200).json({ message: `Hello, ${(_a = req.body) === null || _a === void 0 ? void 0 : _a.email}` });
    });
    app.use("/api/v1", routes_1.default);
    // sequelizeConnection
    //   .sync({ force: true })
    //   .then(() => {
    //     console.log(cyan("Database successfully connected!"));
    //   })
    //   .catch((err) => {
    //     // console.log("Error", err);
    //   });
    return app;
};
exports.get = get;
const start = () => {
    process.on("uncaughtException", function (err) {
        console.log(err);
    });
    const app = (0, exports.get)();
    try {
        // listen for requests
        app.listen(NODE_LOCAL_PORT, () => {
            console.log((0, cli_color_1.cyanBright)(`⚡️[server]: Server is running at https://localhost:${NODE_LOCAL_PORT}`));
        });
    }
    catch (error) {
        console.log(`Error occurred: ${error.message}`);
    }
    return app;
};
exports.start = start;
exports.default = (0, exports.start)();
