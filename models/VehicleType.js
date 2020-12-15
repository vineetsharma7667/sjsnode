const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const VehicleTypeSchema = new Schema({
    vehicle_type:{
        type:String,        
        required:true
    },  
},{timestamps: true}
)
mongoose.model('VehicleType',VehicleTypeSchema);
