import express from "express";
import mongoose from "mongoose";

import router from "./router.js";

const PORT = 5000;

const DB_URL = `mongodb://root:rootpassword@localhost:27017/`;
const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    mongoose.set("strictQuery", true);
    app.listen(PORT, () => console.log("server started port-" + PORT));
  } catch (e) {
    console.log("Error server :>> ", e);
  }
}

startApp();
