const {Shopping, Product} = require('../models/models');
class ShoppingController{
    async create(req,res){
        const {price,userId,productId} = req.body;
        const order = await Shopping.create({price,userId,productId});
        return res.json(order);
    }

    async getAll(req,res){
        const orders = await Shopping.findAll()
        return res.json(orders);
    }

    async getOne(req,res){
        const {id} = req.query;
        const order = await Shopping.findOne({
            where : {id},
            include : [{model : Product, as: 'prod'}]
        })
    }
}

module.exports = new ShoppingController();