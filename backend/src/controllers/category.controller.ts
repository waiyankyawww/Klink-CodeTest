import { Request, Response } from "express";

import Model from "../models";
const Category = Model.Category;

const categoryFetcher = async (req: Request, res: Response) => {
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
      } else {
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

const categoryCreator = async (req: Request, res: Response) => {
  if (req.body && req.body.id && req.body.name) {
    await Category.create({
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

export default { categoryFetcher, categoryCreator };
