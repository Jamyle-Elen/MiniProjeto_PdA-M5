import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Forest = db.define(
    "Forest",
    {
        forestName: {
            type: DataTypes.STRING,
        },
        forestArea: {
            type: DataTypes.BOOLEAN,
        },
        endemicSpecies: {
            type: DataTypes.INTEGER,
        },
        forestDescription: {
            type: DataTypes.STRING,
        },
        forestImage: {
            type: DataTypes.STRING,
            // https://i.ibb.co/RBLrs0s/mata-igapo-II.jpg
        },
    },
    {
        timestamps: false,
    }
);

export default Forest
