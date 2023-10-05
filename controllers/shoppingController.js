const {Shopping, Product} = require('../models/models');
class ShoppingController{
    async create(req,res){
        const {price} = req.body;
        const order = await Shopping.create({price})
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