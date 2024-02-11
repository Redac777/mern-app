const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model');
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

const MONGODB_URI = "mongodb+srv://redacedd:azerty1987@cluster0.vuwgu0m.mongodb.net/mern-app";
try{
    mongoose.connect(MONGODB_URI)
    console.log('connected successfully')
}catch(err){
    console.log("error connecting to mogodb database")
}

app.post('/api/register',async (req,res)=>{
    console.log(req.body)
    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({status:'ok'})
    }catch(err){
        res.json({status:'error',error:'Duplicate email '})
    }
})

app.post('/api/login',async (req,res)=>{
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password,
        })
        if(user){
            token = jwt.sign({
                name:user.name,
                email:user.email
            },'secret123')
            return res.json({status:'ok',user:token})
        }else{
            return res.json({status:'error',user:false})
        }
    
})

app.get('/server',(req,res)=>{
    res.send("welcome to server !")
})

app.listen(1337)