import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export default mongoose.model("Todo", Todo);
