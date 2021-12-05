const { Router } = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

const router = Router();

// USERS
router.get('/users', userController.list);
router.get('/users/:id', userController.show);
router.post('/users', userController.create);
router.post('/users/sigin', userController.sigin);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

// PRODUCTS
router.get('/products', productController.list);
router.get('/products/:id', productController.show);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

// PRODUCTS
router.get('/orders', orderController.list);
router.get('/orders/:id', orderController.show);
router.get('/orders/users/:id', orderController.listByUserId);
router.post('/orders', orderController.create);
router.patch('/orders/status/:id', orderController.updateStatus);
router.delete('/orders/:id', orderController.delete);

module.exports = router;