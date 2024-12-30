import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();

const connectDB = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Debug connection
connectDB.connect((err, client, release) => {
    if (err) {
        console.error("Database connection error:", err.stack);
    } else {
        console.log("Connected to the database");
    }
    release();
});

export default connectDB;