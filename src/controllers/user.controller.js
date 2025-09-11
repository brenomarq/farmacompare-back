import userService from "../services/user.service.js";

const userController = {
  getUsers(req, res) {
    try {
      const users = userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser(req, res) {
    try {
      const { name } = req.body;
      const newUser = userService.create(name);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default userController;
