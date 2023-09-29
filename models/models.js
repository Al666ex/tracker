const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    email : {type : DataTypes.STRING, unique : true},
    password : {type : DataTypes.STRING},
    role : {type : DataTypes.STRING, defaultValue : "USER"}
});

const Product = sequelize.define('product',{
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    name : {type : DataTypes.STRING, allowNull:false},
    img : {type : DataTypes.STRING, allowNull:false},
    description : {type : DataTypes.STRING}
});

const Shopping = sequelize.define('shopping',{
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    price : {type : DataTypes.INTEGER, allowNull : false}
});

User.hasMany(Shopping);
Shopping.belongsTo(User);

Product.hasMany(Shopping);
Shopping.belongsTo(Product);

module.exports = {
    User, Product, Shopping
}