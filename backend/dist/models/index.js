"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("./product.model"));
const user_model_1 = __importDefault(require("./user.model"));
const category_model_1 = __importDefault(require("./category.model"));
const Model = {
    User: user_model_1.default,
    Product: product_model_1.default,
    Category: category_model_1.default,
};
exports.default = Model;
