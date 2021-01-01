const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const ClassSchema = new Schema({
    class_name:{
        type:String,    
        unique:true,
        required:true,
    }, 
    actual_class:{
        type:String,        
    }, 
    description:{
        type:String,        
    }, 
},{timestamps: true}
)

mongoose.model('Class',ClassSchema);
