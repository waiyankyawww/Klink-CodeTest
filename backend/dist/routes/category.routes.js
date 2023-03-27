"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.post("/", category_controller_1.default.categoryCreator);
categoryRouter.get("/", category_controller_1.default.categoryFetcher);
exports.default = categoryRouter;
