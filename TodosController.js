import TodoService from "./TodoService.js";

class TodoController {
  async create(req, res) {
    try {
      const todo = await TodoService.create(req.body);
      res.status(200).json(todo);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const todo = await TodoService.getOne(req.params.id);
      return res.json(todo);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedTodo = await TodoService.update(req.body);
      return res.json(updatedTodo);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const todo = await TodoService.delete(req.params.id);
      return res.json(todo);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new TodoController();
