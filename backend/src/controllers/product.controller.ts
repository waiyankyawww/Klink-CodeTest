import { Request, Response } from "express";

import Model from "../models";
const Product = Model.Product;

const productFetcher = async (req: Request, res: Response) => {
  Product.findAll()
    .then((products) => {
      if (products.length > 0) {
        return res.status(200).json({
          meta: {
            status: 200,
            success: true,
            message: "Products fetched successfully",
          },
          body: products,
        });
      } else {
        return res.status(404).json({
          meta: {
            status: 404,
            success: true,
            message: "No Products found",
          },
          body: products,
        });
      }
    })
    .catch((err: Error) => {
      return res.status(500).json({
        meta: {
          status: 500,
          success: false,
          message: err,
        },
      });
    });
};

const productCreator = async (req: Request, res: Response) => {
  if (req.body.name && req.body.img && req.body.price && req.body.category) {
    await Product.create({
      name: req.body.name,
      img: req.body.img,
      price: req.body.price,
      category: req.body.category,
    })
      .then((created) => {
        return res.status(201).json({
          meta: {
            status: 201,
            success: true,
            message: "Product created successfully",
          },
          body: created,
        });
      })
      .catch((err: Error) => {
        return res.status(500).json({
          meta: {
            status: 500,
            success: false,
            message: err,
          },
        });
      });
  } else {
    return res.status(402).json({
      meta: {
        status: 402,
        success: false,
        message: "Something is required",
      },
    });
  }
};

export default { productFetcher, productCreator };
