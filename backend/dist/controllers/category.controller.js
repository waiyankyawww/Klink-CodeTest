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
const models_1 = __importDefault(require("../models"));
const Category = models_1.default.Category;
const categoryFetcher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Category.findAll()
        .then((categories) => {
        if (categories.length > 0) {
            return res.status(200).json({
                meta: {
                    status: 200,
                    success: true,
                    message: "Category fetched successfully",
                },
                body: categories,
            });
        }
        else {
            return res.status(404).json({
                meta: {
                    status: 404,
                    success: true,
                    message: "No categories found",
                },
                body: categories,
            });
        }
    })
        .catch((err) => {
        return res.status(500).json({
            meta: {
                status: 500,
                success: false,
                message: err,
            },
        });
    });
});
const categoryCreator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body && req.body.id && req.body.name) {
        yield Category.create({
            id: req.body.id,
            name: req.body.name,
        })
            .then((created) => {
            return res.status(201).json({
                meta: {
                    status: 201,
                    success: true,
                    message: "categories created successfully",
                },
                body: created,
            });
        })
            .catch((err) => {
            return res.status(500).json({
                meta: {
                    status: 500,
                    success: false,
                    message: err,
                },
            });
        });
    }
    else {
        return res.status(402).json({
            meta: {
                status: 402,
                success: false,
                message: "Something is required",
            },
        });
    }
});
exports.default = { categoryFetcher, categoryCreator };
