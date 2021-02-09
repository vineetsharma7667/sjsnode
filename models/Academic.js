const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const AcademicSchema = new Schema({
 
    school_id:{
        type:String,        
    },
    session:{
        type:String,        
    }, 
    class_name:{
        type:String,        
    }, 
    section:{
        type:String,        
    }, 
    admission_no:{
        type:String,        
    }, 
    account_no:{
        type:String,        
    }, 
    student:{ type:Schema.Types.ObjectId,
        ref:"Student"
     },

},{timestamps: true}
)
mongoose.model('Academic',AcademicSchema);
