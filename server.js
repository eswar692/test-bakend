const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv')
const router = require('./route')
const cors = require('cors')

app.use(
    cors({
        origin :"*"
    })
)

dotEnv.config()
app.use(bodyParser.json())


mongoose.connect(process.env.url)
.then(()=>{console.log('db connect')})
.catch((e)=>{console.log(e)})


app.use('/citizen',router)
app.get('/happy',(req,res)=>{
    res.send({message:"hi ra pappu"})
})

app.listen(5000,()=>{console.log('server runing')})