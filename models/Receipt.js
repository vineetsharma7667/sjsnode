const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const FeeReceiptSchema = new Schema({
    receipt_date:{
        type:String,        
    },
    receipt_no:{
        unique:true,
        type:String,        
    },
    last_fee_date:{
        type:String,        
    },
    
    ref_receipt_no:{
        type:String,
    },
    session:{
        type:String,        
        required:true,
    }, 
    admission_no:{
        type:String,        
    },
    account_no:{
        type:String,        
    },
    paid_fees:{
        type:String
    },
    paid_months:{
        type:String
    },
    paid_amount:{
        type:String
    },
    total_monthly_fee:{
        type:String,        
    },
    grand_total:{
        type:String,        
    },
    payment_mode:{
        type:String,        
    },
    bank:{
        type:String,        
    },
    bank_v_no:{
        type:String,        
    },
    check_no:{
        type:String,        
    },
    bank_date:{
        type:String,        
    },
},{timestamps: true}
)

mongoose.model('Receipt',FeeReceiptSchema);
