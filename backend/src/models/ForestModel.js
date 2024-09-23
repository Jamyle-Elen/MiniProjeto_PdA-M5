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
            type: DataTypes.BOOLEAN,
        },
        forestDescription: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

export default Forest
