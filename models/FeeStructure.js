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
    prospectus_fee:{
        type:String,        
    },
    registration_fee:{
        type:String,        
    },
    admission_fee:{
        type:String,        
    },
    security_fee:{
        type:String,        
    },
    total_one_time:{
        type:String,        
    },
    report_card_and_diary:{
        type:String,        
    },
    report_card_and_diary_pim:{
        type:String,        
    },
    annual_prize_day:{
        type:String,        
    },
    annual_prize_day_pim:{
        type:String,        
    },
    development_fund:{
        type:String,        
    },
    development_fund_pim:{
        type:String,        
    },
    school_magazin:{
        type:String,        
    },
    school_magazin_pim:{
        type:String,        
    },
    annual_sports_day:{
        type:String,        
    },
    annual_sports_day_pim:{
        type:String,        
    },
    examination_fee:{
        type:String,        
    }, examination_fee_pim:{
        type:String,        
    },
    med_board_reg:{
        type:String,        
    },
    med_board_reg_pim:{
        type:String,        
    },
    library_fee:{
        type:String,        
    },
    library_fee_pim:{
        type:String,        
    },
    tution_fee:{
        type:String,        
    },
    computer_fee:{
        type:String,        
    },
    science_fee:{
        type:String,        
    },
    bus_fare:{
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
