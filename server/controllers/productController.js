const Product = require("../models/Product");

const productController = {
  async list(req, res) {
    try {
      const products = await Product.findAll();

      res.send(products);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id: id } });

      res.send(product);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async create(req, res) {
    try {
      const data = await Product.create(req.body);

      res.json(data);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id } });

      product.name = req.body.name; 
      product.description = req.body.description; 
      product.value = req.body.value; 

      const data = await product.save();

      res.json(data);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Product.destroy({ where: { id } });

      res.send('Product deleted');

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  }
}

module.exports = productController;