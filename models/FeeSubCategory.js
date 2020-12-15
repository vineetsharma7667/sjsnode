const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const feesubcategorySchema = new Schema({
    fee_category:{
        type:String,        
        required:true
    }, 
    fee_sub_category:{
        type:String,        
        required:true
    }, 
    amount:{
        type:String,        
    },
    fee_type:{
        type:String,        
    }

},{timestamps: true}
)

mongoose.model('FeeSubCategory',feesubcategorySchema);
