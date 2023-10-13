const ApiError = require('../error/ApiError');
const {User} = require('../models/models');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJvt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn : '24h'}
    )
}
class UserController{
    async registration(req,res,next){
        const {email, password, role} = req.body;

        console.log('test')
        console.log(req.body.email)

        if(!email || !password){
            return next(ApiError.badRequest('не задан email или password'));
        }

        const personCheck = await User.findOne({where : {email}});
        if(personCheck){
            return next(ApiError.badRequest(`Пользователь уже существует`));
        }

        const hashPsw = await bcrypt.hash(password,5);
        const user = await User.create({email, password : hashPsw, role});
        
        const token = generateJvt(user.id, user.email, user.role)

        return res.json({token})

    }

    async login(req,res,next){
        const {email, password} = req.body;

        const user = await User.findOne({where : {email}});
        if(!user){
            return next(ApiError.internal('user not found'));
        }

        const comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal('wrong password'))
        }

        let token = generateJvt(user.id, user.email, user.role);
        return res.json(token);

    }


    async check(req,res,next){
        return res.json({message : 'check is working'})
        const token = generateJvt(req.user.id,req.user.email,req.user.role)
        return req.json(token)
    }
}

module.exports = new UserController();