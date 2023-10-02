const {v4} = require('uuid');
const path = require('path');
const {Product} = require('../models/models');
const ApiError = require('../error/ApiError');
class ProductController{
    async create(req,res,next){
        //return res.json({message : 'create product'})
        try {
            const {name, description} = req.body;
            const {img} = req.files;
            let fileName = v4()+'.jpg';
            /*адаптирует указаный путь к операционной системе*/
            img.mv(path.resolve(__dirname,'..','static',fileName));
    
            const product = await Product.create({name, description, img : fileName})
            return res.json(product)  
        } catch (error) {
             next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req,res){
        const products = await Product.findAll();
        return res.json(products);
    }

}

module.exports = new ProductController();