"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const category_model_1 = __importDefault(require("./category.model"));
const product_model_1 = __importDefault(require("./product.model"));
// many-to-many category with product model
const Category_Product = config_1.default.define("categories_products", {}, { timestamps: false });
category_model_1.default.belongsToMany(product_model_1.default, {
    through: Category_Product,
    foreignKey: "category_id",
});
product_model_1.default.belongsToMany(category_model_1.default, {
    through: Category_Product,
    foreignKey: "product_id",
});
exports.default = Category_Product;
