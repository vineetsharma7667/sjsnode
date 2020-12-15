const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const SessionSchema = new Schema({
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
