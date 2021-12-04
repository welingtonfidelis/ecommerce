const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/users', userController.list);

router.get('/users/:id', userController.show);

router.post('/users', userController.create);

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.delete);

module.exports = router;