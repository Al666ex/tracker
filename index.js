require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',router);

/*
app.get('/',(req,res) => {
    res.status(200).json({message : 'It is working!!!'})
});
*/
const start  = async () =>{
    try {
        /*connect to DB*/
        await sequelize.authenticate();
        /*check the database state against the data schema*/
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started at PORT=${PORT}`))
        
    } catch (error) {
        console.log(error)
    }
} 

start();