import { DataTypes } from "sequelize";
import db from "../config";

const Product = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: { allowNull: false, type: DataTypes.STRING },
  price: { allowNull: false, type: DataTypes.INTEGER },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

export default Product;
