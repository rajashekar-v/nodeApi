const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateCreateUser } = require('../validations/userValidation');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', userController.login);
router.get('/users', authMiddleware.verifyToken, userController.getUsers);
router.post('/users', validateCreateUser, userController.createUser);

module.exports = router;
