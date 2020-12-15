const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const StudentSchema = new Schema({
    session:{
        type:String,        
    }, 
    date_of_admission:{
        type:String,        
    }, 
    parent:{
        type:String,        
    }, 
    account_no:{
        type:String,        
    }, 
    admission_no:{
        type:String,        
    }, 
    security_no:{
        type:String,        
    }, 
    old_admission_no:{
        type:String,        
    }, 
    aadhar_no:{
        type:String,        
    }, 
    class_name:{
        type:String,        
    }, 
    section:{
        type:String,        
    }, 
    is_start_from_first_class:{
        type:String,        
    }, 
    last_class:{
        type:String,        
    }, 
    category:{
        type:String,        
    }, 

    house:{
        type:String,        
        required:true
    }, 
    name:{
        type:String,        
    }, 
    sex:{
        type:String,        
    }, 
    dob:{
        type:String,        
    }, 
    nationality:{
        type:String,        
    }, 
    last_school:{
        type:String,        
    }, 
    balance:{
        type:String,        
    }, 
    fee_concession:{
        type:String,        
    }, 
    bus_fare_concession:{
        type:String,        
    }, 
    vehicle_no:{
        type:String,        
    }, 
    is_teacher_ward:{
        type:String,        
    }, 
    paid_upto_month:{
        type:String,        
    }, 
    paid_upto_year:{
        type:String,        
    }, 
    last_school_performance:{
        type:String,        
    }, 

    is_full_free_ship:{
        type:String,        
    }, 

    avail_transport:{
        type:String,        
    }, 

    take_computer:{
        type:String,        
    }, 

    no_exempt_security_deposit:{
        type:String,        
    }, 

    ncc:{
        type:String,        
    }, 

    no_exempt_registration:{
        type:String,        
    }, 

    no_exempt_admission:{
        type:String,        
    }, 

    is_repeater:{
        type:String,        
    }, 

    other_details:{
        type:String,        
    }, 

    misc_details:{
        type:String,        
    }, 
    image:{
        type:String,        
    }, 


},{timestamps: true}
)
mongoose.model('Student',StudentSchema);
