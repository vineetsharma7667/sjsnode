const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const FeeStructureSchema = new Schema({
    session:{
        type:String,        
        required:true
    }, 
    class_name:{
        type:String,        
    },
    section:{
        type:String,        
    },
    fees:{
        type:String,        
    },
    total_one_time:{
        type:String,        
    },
    total_monthly_fee:{
        type:String,        
    },
    grand_total:{
        type:String,        
    },

 

},{timestamps: true}
)

mongoose.model('FeeStructure',FeeStructureSchema);
