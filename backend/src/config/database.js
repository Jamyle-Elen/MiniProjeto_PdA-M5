import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/config/database.db",
});

const syncDatabase = async () => {
    try {
        await db.sync();
        console.log("Database OK OK OK");
    } catch (error) {
        console.error("Error Error Error", error);
    }
}

db.authenticate()
    .then(() => {
        syncDatabase();
        console.log("Database OK OK");
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });

export default db;
