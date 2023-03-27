"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const product_routes_1 = __importDefault(require("./product.routes"));
const routes = express_1.default.Router();
routes.get("/", (req, res) => {
    res.send("There will be a list of all the available routes here!");
});
routes.use("/products", product_routes_1.default);
routes.use("/categories", category_routes_1.default);
routes.use("/login", auth_routes_1.default);
exports.default = routes;
