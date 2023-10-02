
const Router = require('express');
const router = new Router();
const shoppingRouter = require('../controllers/shoppingController');
const shoppingController = require('../controllers/shoppingController');

router.post('/',shoppingController.create);
router.get('/',shoppingController.getAll);
router.get('/:id',shoppingController.getOne);

module.exports = router;