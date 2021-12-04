const User = require("../models/User");
const { createHash } = require("../utils/auth");

const todoController = {
  async list(req, res) {
    try {
      const users = await User.findAll();

      res.send(users);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where: { id: id } });

      res.send(user);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async create(req, res) {
    try {
      req.body.password = await createHash(req.body.password);

      const data = await User.create(req.body);

      res.json(data);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });

      user.name = req.body.name; 
      user.email = req.body.email; 
      user.role = req.body.role; 

      const data = await user.save();

      res.json(data);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });

      res.send('User deleted');

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  }
}

module.exports = todoController;