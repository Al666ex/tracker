class UserController{
    async login(req,res){

    }

    async registration(req,res){

    }

    async check(req,res){
        // return res.json('Check working!!!')
        const {id} = req.query
        res.json(id)

    }
}

module.exports = new UserController();