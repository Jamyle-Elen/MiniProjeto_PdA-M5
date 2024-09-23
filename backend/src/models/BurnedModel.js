import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Burned = db.define(
  "Burned",
  {
    fireActive: {
      type: DataTypes.INTEGER,
    },
    devastatedArea: {
      type: DataTypes.INTEGER,
    },
    affectedAnimals: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

export default Burned;
