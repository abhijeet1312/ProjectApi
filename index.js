import express from "express";
import bodyParser from "body-parser";
import events from 'events';
events.EventEmitter.defaultMaxListeners = 15; // Increase the limit as needed
import env from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/routes.js";
import contactRoutes from "./routes/contactRoutes.js";

import projectRoutes from './routes/projectRoutes.js';
// import connectDB from "./server/config/db.js";

env.config(); //very important line for initaliszing env file
const app = express();
const port = process.env.PORT;

/// Set EJS as the default view engine
app.set("view engine", "ejs");
app.set("views", "./views");



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/", router);
app.use("/", projectRoutes);
app.use("/", contactRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});