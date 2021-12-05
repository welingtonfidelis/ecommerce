
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class OrderProduct extends Model { }

OrderProduct.init({
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'order-products',
    timestamps: false,
});

module.exports = OrderProduct;