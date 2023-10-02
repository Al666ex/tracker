
const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const shoppingRouter = require('./shoppingRouter');
const productRouter = require('./productRouter')

router.use('/user',userRouter);
router.use('/product',productRouter);
router.use('/shopping',shoppingRouter);

module.exports = router;