const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const SessionSchema = new Schema({
    session_code:{
        type:String, 
        unique:true,       
        required:true
    }, 
    from:{
        type:String,     
        required:true
    }, 
    to:{
        type:String,  
        required:true
    }, 
   
},{timestamps: true}
)
mongoose.model('Session',SessionSchema);
