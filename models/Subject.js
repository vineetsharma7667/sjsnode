const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const SubjectSchema = new Schema({
    class_name:{
        type:String,        
        required:true
    },
    subject:{
        type:String,  
        unique:true,      
        required:true
    }, 
    subject_code:{
        type:String,        
        required:true
    },   
    board_code:{
        type:String,               
    }, 
    order_no:{
        type:String,        
    },
    description:{
        type:String,        
    }, 


},{timestamps: true}
)

mongoose.model('Subject',SubjectSchema);
