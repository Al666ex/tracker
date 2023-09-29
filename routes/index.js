
const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const shoppingRouter = require('./shoppingRouter');
const productRouter = require('./productRouter')

router.use('/user',userRouter);
router.use('/product',shoppingRouter);
router.use('/shopping',productRouter);

module.exports = router;