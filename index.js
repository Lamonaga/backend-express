import express from "express";
import mongoose, { get } from "mongoose";
import Todo from "./Todo.js";

const PORT = 5000;

const DB_URL = `mongodb://root:rootpassword@localhost:27017/`;
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { title, completed } = req.body;
    const todo = await Todo.create({ title, completed });
    res.status(200).json(todo);
  } catch (e) {
    console.log("Error post :>> ", e);
  }
});

app.get("/todos", async (req, res) => {
  try {
    Todo.find({}, (err, todos) => {
      if (err) {
        console.log("err :>> ", err);
      } else {
        res.json(todos);
      }
    });
  } catch (e) {
    console.log("Error get :>> ", e);
  }
});

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
