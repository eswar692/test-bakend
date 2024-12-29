const mongoose = require('mongoose')

const citizen = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
    
            type:String,
            require:true
        
    }
})


module.exports = mongoose.model('Citizen',citizen)