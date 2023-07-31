// requiring mongoose
const mongoose=require('mongoose');

// creating the schema
const schema=new mongoose.Schema({
        Description:{
            type:String,
            required:true
        },
        Category:{
            type:String,
            required:true
        },
        Date:{
            type:String,
            required:true        
        }
    })
    const todoSchema=mongoose.model('Schema',schema);
    module.exports=todoSchema;