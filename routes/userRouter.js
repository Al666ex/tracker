const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController')

router.post('/registration', userController.registration);
router.post('/login', userController.login);
//router.get('/auth', (req,res) => res.status(200).json({messgae : 'Auth is OK!!!'}));
router.get('/auth', userController.check);

module.exports = router;