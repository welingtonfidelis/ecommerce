
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Order extends Model { }

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
    },
    updated_at: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'orders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


module.exports = Order;