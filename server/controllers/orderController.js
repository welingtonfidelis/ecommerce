const Order = require("../models/Order");
const OrderProduct = require("../models/OrderProduct");
const Product = require("../models/Product");
const User = require("../models/User");

const productController = {
  async list(req, res) {
    try {
      const { status } = req.query;
      const where = {};

      if (status) {
        where.approved = status === 'true'
      }

      const orders = await Order.findAll({
        where,
        attributes: ['id', 'approved', 'user_id', 'created_at']
      });

      const ordersWithRelationship = []
      for (const order of orders) {
        const user = await User.findByPk(order.user_id, { attributes: ['id', 'name', 'email'] });
        const orderProducts = await OrderProduct.findAll({ where: { order_id: order.id } });
        const orderProductId = orderProducts.map(item => item.product_id);
        const productsWithoutQuantity = await Product.findAll({
          where: { id: orderProductId },
          attributes: ['id', 'name', 'value', 'image']
        });
        const products = productsWithoutQuantity.map((item, index) => {
          return {
            id: item.id,
            name: item.name,
            value: item.value,
            quantity: orderProducts[index].quantity,
            image: item.image
          };
        });

        ordersWithRelationship.push({
          order, user, products
        });
      }

      res.send(ordersWithRelationship);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async listByUserId(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.query;
      const where = { user_id: id };

      if (status) {
        where.approved = status === 'true'
      }

      const orders = await Order.findAll({
        where,
        attributes: ['id', 'approved', 'user_id', 'created_at']
      });

      const ordersWithRelationship = []
      for (const order of orders) {
        const user = await User.findByPk(order.user_id, { attributes: ['id', 'name', 'email'] });
        const orderProducts = await OrderProduct.findAll({ where: { order_id: order.id } });
        const orderProductId = orderProducts.map(item => item.product_id);
        const productsWithoutQuantity = await Product.findAll({ 
          where: { id: orderProductId }, 
          attributes: ['id', 'name', 'value', 'image'] 
        });
        const products = productsWithoutQuantity.map((item, index) => {
          return {
            id: item.id,
            name: item.name,
            value: item.value,
            quantity: orderProducts[index].quantity,
            image: item.image
          };
        });

        ordersWithRelationship.push({
          order, user, products
        });
      }

      res.send(ordersWithRelationship);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id, { attributes: ['id', 'approved', 'user_id', 'created_at'] });

      let orderWithRelationship = {}
      if (order) {
        const user = await User.findByPk(order.user_id, { attributes: ['id', 'name', 'email'] });
        const orderProducts = await OrderProduct.findAll({ where: { order_id: order.id } });
        const orderProductId = orderProducts.map(item => item.product_id);
        const productsWithoutQuantity = await Product.findAll({ 
          where: { id: orderProductId }, 
          attributes: ['id', 'name', 'value', 'image'] 
        });
        const products = productsWithoutQuantity.map((item, index) => {
          return {
            id: item.id,
            name: item.name,
            value: item.value,
            quantity: orderProducts[index].quantity,
            image: item.image
          };
        });

        orderWithRelationship = {
          order, user, products
        };
      }

      res.send(orderWithRelationship);

    } catch (error) {
      console.log("\n", error);
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async create(req, res) {
    try {
      const { user_id, products } = req.body;

      const order = await Order.create({ user_id });

      const orderProduct = []
      for (const product of products) {
        orderProduct.push({
          order_id: order.id,
          product_id: product.id,
          quantity: product.quantity
        });
      }

      await OrderProduct.bulkCreate(orderProduct);

      res.json(order);

    } catch (error) {
      console.log("\n", error);
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const order = await Order.findOne({ where: { id } });

      order.approved = req.body.status;

      const data = await order.save();

      res.json(data);

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Order.destroy({ where: { id } });

      res.send('Order deleted');

    } catch (error) {
      res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
  }
}

module.exports = productController;