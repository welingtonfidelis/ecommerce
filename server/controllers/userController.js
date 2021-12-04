const User = require("../models/User");
const { createHash, validateHash } = require("../utils/auth");

const userController = {
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

  async sigin(req, res) {
    try {
      const { email: _email, password } = req.body;
      const user = await User.findOne({ email: _email });

      if (!user) return res.status(401).send("User not found");

      const isValidPassword = await validateHash(password, user.password);

      if (!isValidPassword) return res.status(401).send("Invalid password or email");

      const { id, name, email, role } = user;

      res.json({ id, name, email, role });

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

module.exports = userController;