const ApiError = require('../error/ApiError')
class UserController{
    async login(req,res){

    }

    async registration(req,res){

    }

    async check(req,res,next){
        // return res.json('Check working!!!')
        const {id} = req.query

        if(!id){
            return next(ApiError.badRequest('Не задан ID'))
        }

        res.json(id)

    }
}

module.exports = new UserController();