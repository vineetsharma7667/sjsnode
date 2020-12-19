const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const HouseSchema = new Schema({
    house_name:{
        type:String,     
        required:true,
    },  
    color:{
        type:String,        
        required:true
    },  
},{timestamps: true}
)
mongoose.model('House',HouseSchema);
