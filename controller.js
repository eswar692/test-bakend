const Model = require('./model')

const citizenPost = async (req,res)=>{
    try {
        const {name,age} = req.body;
        const citizen = new Model({
            name,
            age
        })
        await citizen.save()
        res.status(201).json(citizen)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error"})        
    }
}
const get = async (req,res)=>{
    try {
        const citizen = await  Model.find();
        res.status(201).json(citizen)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error"})  

        
    }
}

module.exports = {citizenPost,get}