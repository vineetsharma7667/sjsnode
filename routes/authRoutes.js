const express = require('express')
const { Router } = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys');
const { json } = require('body-parser');
const router = express.Router()
const User = mongoose.model('user')
const FeeCategory = mongoose.model('FeeCategory')
const FeeSubCategory = mongoose.model('FeeSubCategory')
const WaiverCategory = mongoose.model('WaiverCategory')
const Waiver = mongoose.model('Waiver')
const Session = mongoose.model('Session')
const Class = mongoose.model('Class')
const Section = mongoose.model('Section')
const Category = mongoose.model('Category')
const Vehicle = mongoose.model('Vehicle')
const VehicleType = mongoose.model('VehicleType')
const Subject = mongoose.model('Subject')
const House = mongoose.model('House')
const Parent = mongoose.model('Parent')
const Student = mongoose.model('Student')
const FeeStructure = mongoose.model('FeeStructure')
const Receipt = mongoose.model('Receipt')


const cors = require('cors');
multer = require('multer')
multer({
    limits: { fieldSize: 2 * 1024 * 1024 }
  })
router.use(cors({ origin: true }));
//code for images
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })
//end code for images


// signin Routes
    router.post('/signin', async (req, res) => {
        console.log("yes im vineet")
        const { username, password,} = req.body
        console.log(req.body)
        console.log(username, password)
        if (!username || !password) {
            return res.status(422).send({ error: "must provide email or password2" })
        }
        const user = await User.findOne({ username ,password})
        console.log(user)
        if (!user) {
            return res.status(422).send({ error: "must provide email or password3" })
        }
        try {
            // await user.comparePassword(password);
            const token = jwt.sign({ userId: user.id }, jwtkey)
            console.log(user.id)
            res.send({ token: token, userid: user.id, user})
        }
        catch (err) {
            return res.status(422).send({ error: "must provide email or password4" })
        }
    })
// End Signin routes

// Start Fee category routes
router.post('/StoreFeeCatogory', upload.single('image'), async (req, res) => {
const { category,description } = req.body;
try {
    const Fee_cat = new FeeCategory({ category,description })
    await Fee_cat.save();
    if (Fee_cat) {
        console.log("Fee_cat")
    }
    else {
        console.log("data is not stored")
    }
    console.log(Fee_cat);
    res.send(Fee_cat)
} catch (err) {
    return res.status(422).send(err.message)
 
}
})

router.get('/getCategory', async (req, res) => {
    try {
        const data = await FeeCategory.find()
        if (data) {
            console.log(data[0])
        }
        console.log(data[0])
        res.send(data)
    }
    catch (err) {
        return res.status(422).send({ error: "error for fetching food data" })
    }
})
// end Fee category routes

// Start Fee Sub category routes
router.post('/StoreFeeSubCatogory', upload.single('image'), async (req, res) => {
    const { fee_category,fee_sub_category,amount,month,status} = req.body;
    try {
        const Fee_sub_cat = new FeeSubCategory({ fee_category,fee_sub_category,amount,month,status})
        await Fee_sub_cat.save();
        if (Fee_sub_cat) {
            console.log("Fee_sub_cat")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Fee_sub_cat);
        res.send(Fee_sub_cat)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getSubCategory', async (req, res) => {
        try {
            const data = await FeeSubCategory.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    }) 
    router.put('/updateFeeSubCategory', upload.single('image') ,async (req, res) => {
        console.log("Yes I Am In")
        const { _id,fee_category,fee_sub_category,amount,month,status } = req.body;
        // const image = req.file.path
        FeeSubCategory.findByIdAndUpdate({_id},{ fee_category,fee_sub_category,amount,month,status }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteFeeSubCategory', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        FeeSubCategory.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
    // end Fee Sub category routes


// Start Waiver Category routes
router.post('/StoreWaiverCategory', upload.single('image'), async (req, res) => {
    console.log("yes im in");
    const { category} = req.body;
    try {
        const WaiverCat = new WaiverCategory({ category })
        await WaiverCat.save();
        if (WaiverCat) {
            console.log("WaiverCat")
        }
        else {
            console.log("data is not stored")
        }
        console.log(WaiverCat);
        res.send(WaiverCat)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getWaiverCategory', async (req, res) => {
        try {
            const data = await WaiverCategory.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
// end Waiver Category routes

// Start Waiver routes
router.post('/StoreWaiver', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const { FeeCat,FeeSubCat,ExcemptionOrDeduction,CategoryOrGender,WaiverCat,Gender} = req.body;
    try {
        const Waiver_cat = new Waiver({ FeeCat,FeeSubCat,ExcemptionOrDeduction,CategoryOrGender,WaiverCat,Gender })
        await Waiver_cat.save();
        if (Waiver_cat) {
            console.log("Waiver_cat")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Waiver_cat);
        res.send(Waiver_cat)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })
// end Waiver routes

// Start Session routes
router.post('/StoreSession', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const { from,to,session_code} = req.body;
    try {
        const Session_data = new Session({from,to,session_code })
        await Session_data.save();
        if (Session_data) {
            console.log("Session_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Session_data);
        res.send(Session_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getSession', async (req, res) => {
        try {
            const data = await Session.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
            
        }
    })
// end Session routes


// Start Class routes
router.post('/StoreClass', upload.single('image'),async (req, res) => {
    console.log("yes im in");
    console.log(req.body);
    const {class_name,actual_class,description} = req.body;
    try {
        const class_data = new Class({class_name,actual_class,description })
        await class_data.save();
        if (class_data) {
            console.log("class_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(class_data);
        res.send(class_data)
    } catch (err) {
        console.log(err.message.toString().includes('duplicate'))
        if(err.message.toString().includes('duplicate')){
           var errmsg = "please enter a unique value class"+req.body.class_name +" already exist"
           return res.send(errmsg)
        }
        
    }
    })

    router.get('/getClass', async (req, res) => {
        try {
            const data = await Class.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.put('/updateClass', upload.single('image') ,async (req, res) => {
        const { _id,class_name,actual_class,description } = req.body;
        // const image = req.file.path
        Class.findByIdAndUpdate({_id},{  class_name,actual_class,description }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteClass', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        Class.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Class routes


// Start Section routes
router.post('/StoreSection', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {class_name,section,description} = req.body;
    try {
        const section_data = new Section({class_name,section,description })
        await section_data.save();
        if (section_data) {
            console.log("section_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(section_data);
        res.send(section_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getSection', async (req, res) => {
        try {
            const data = await Section.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.put('/updateSection', upload.single('image') ,async (req, res) => {
        const { _id,class_name,section,description } = req.body;
        // const image = req.file.path
        Section.findByIdAndUpdate({_id},{  class_name,section,description }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteSection', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        Section.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Section routes


// Start Category routes
router.post('/StoreCategory', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {category,description} = req.body;
    try {
        const category_data = new Category({category,description})
        await category_data.save();
        if (category_data) {
            console.log("category_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(category_data);
        res.send(category_data)
    } catch (err) {
        return res.status(422).send(err.message)
    }
    })
    
    router.get('/getCastCategory', async (req, res) => {
        try {
            const data = await Category.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.put('/updateCategory', upload.single('image') ,async (req, res) => {
        const { _id,category,description } = req.body;
        // const image = req.file.path
        Category.findByIdAndUpdate({_id},{  category,description }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteCategory', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        Category.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Category routes

// Start Vehicle routes
router.post('/StoreVehicle', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {vehicle_type,vehicle_no,root,root_description,driver_name,contact_no} = req.body;
    try {
        const Vehicle_data = new Vehicle({vehicle_type,vehicle_no,root,root_description,driver_name,contact_no})
        await Vehicle_data.save();
        if (Vehicle_data) {
            console.log("Vehicle_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Vehicle_data);
        res.send(Vehicle_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

       
    router.get('/getVehicle', async (req, res) => {
        try {
            const data = await Vehicle.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.put('/updateVehicle', upload.single('image') ,async (req, res) => {
        const { _id,vehicle_type,vehicle_no,root,root_description,driver_name,contact_no } = req.body;
        // const image = req.file.path
        Vehicle.findByIdAndUpdate({_id},{vehicle_type,vehicle_no,root,root_description,driver_name,contact_no }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteVehicle', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        VehicleType.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Vehicle routes


// Start Vehicle Type routes
router.post('/StoreVehicleType', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {vehicle_type} = req.body;
    try {
        const Vehicle_type_data = new VehicleType({vehicle_type})
        await Vehicle_type_data.save();
        if (Vehicle_type_data) {
            console.log("Vehicle_type_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Vehicle_type_data);
        res.send(Vehicle_type_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })
    router.get('/getVehicleType', async (req, res) => {
        try {
            const data = await VehicleType.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.put('/updateVehicleType', upload.single('image') ,async (req, res) => {
        const { _id,vehicle_type } = req.body;
        // const image = req.file.path
        VehicleType.findByIdAndUpdate({_id},{  vehicle_type }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteVehicleType', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        VehicleType.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Vehicle Type routes


// Start Subject routes
router.post('/StoreSubject', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {class_name,subject,subject_code,board_code,order_no,description} = req.body;
    try {
        const subject_data = new Subject({class_name,subject,subject_code,board_code,order_no,description})
        await subject_data.save();
        if (subject_data) {
            console.log("subject_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(subject_data);
        res.send(subject_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getSubjects', async (req, res) => {
        try {
            const data = await Subject.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.put('/updateSubject', upload.single('image') ,async (req, res) => {
        console.log("Yes I Am In")
        const { _id,class_name,subject,subject_code,board_code,order_no,description } = req.body;
        // const image = req.file.path
        Subject.findByIdAndUpdate({_id},{ class_name,subject,subject_code,board_code,order_no,description }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteSubject', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        Subject.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Subject routes

// Start House routes
router.post('/StoreHouse', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {house_name,color} = req.body;
    try {
        const House_data = new House({house_name,color})
        await House_data.save();
        if (House_data) {
            console.log("House_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(House_data);
        res.send(House_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getHouse', async (req, res) => {
        try {
            const data = await House.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.put('/updateHouse', upload.single('image') ,async (req, res) => {
        console.log("Yes I Am In")
        const { _id,house_name,color } = req.body;
        // const image = req.file.path
        House.findByIdAndUpdate({_id},{ house_name,color }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteHouse', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        House.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end House routes


// Start Parent routes
router.post('/StoreParent', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const image = req.file.path
    const {account_no,father_name,mother_name,father_occu,father_designation,father_annual_income,mother_occu,mother_desgination,mother_annual_income,parent_address,parent_city,parent_state,parent_country,parent_phone,parent_mobile,gaurdian_name,gaurdian_occu,gaurdian_designation,gaurdian_annual_income,gaurdian_address,gaurdian_city,gaurdian_state,gaurdian_country,gaurdian_phone,gaurdian_mobile} = req.body;
    try {
        const Parent_data = new Parent({image,account_no,father_name,mother_name,father_occu,father_designation,father_annual_income,mother_occu,mother_desgination,mother_annual_income,parent_address,parent_city,parent_state,parent_country,parent_phone,parent_mobile,gaurdian_name,gaurdian_occu,gaurdian_designation,gaurdian_annual_income,gaurdian_address,gaurdian_city,gaurdian_state,gaurdian_country,gaurdian_phone,gaurdian_mobile})
        await Parent_data.save();
        if (Parent_data) {
            console.log("Parent_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Parent_data);
        res.send(Parent_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getParent', async (req, res) => {
        try {
            const data = await Parent.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
// end Parent routes



// Start Student routes
router.post('/StoreStudent', upload.single('image'), async (req, res) => {
    console.log("yes i am in")
    const image = req.file.path
    const balance=0
    const {session,date_of_admission,parent,admission_no,security_no,old_admission_no,aadhar_no,class_name,section,subjects,is_start_from_first_class,last_class,category,house,name,sex,dob,nationality,last_school,fee_concession,bus_fare_concession,vehicle_no,is_teacher_ward,paid_upto_month,paid_upto_year,last_school_performance,is_full_free_ship,avail_transport,take_computer,no_exempt_security_deposit,ncc,no_exempt_registration,no_exempt_admission,is_repeater,other_details,misc_details,account_no,father_name,mother_name,father_occu,father_designation,father_annual_income,mother_occu,mother_desgination,mother_annual_income,parent_address,parent_city,parent_state,parent_country,parent_phone,parent_mobile,gaurdian_name,gaurdian_occu,gaurdian_designation,gaurdian_annual_income,gaurdian_address,gaurdian_city,gaurdian_state,gaurdian_country,gaurdian_phone,gaurdian_mobile} = req.body;
    try {
        const Student_data = new Student({image,session,date_of_admission,balance,parent,admission_no,security_no,old_admission_no,aadhar_no,class_name,section,subjects,is_start_from_first_class,last_class,category,house,name,sex,dob,nationality,last_school,balance,fee_concession,bus_fare_concession,vehicle_no,is_teacher_ward,paid_upto_month,paid_upto_year,last_school_performance,is_full_free_ship,avail_transport,take_computer,no_exempt_security_deposit,ncc,no_exempt_registration,no_exempt_admission,is_repeater,other_details,misc_details,account_no,father_name,mother_name,father_occu,father_designation,father_annual_income,mother_occu,mother_desgination,mother_annual_income,parent_address,parent_city,parent_state,parent_country,parent_phone,parent_mobile,gaurdian_name,gaurdian_occu,gaurdian_designation,gaurdian_annual_income,gaurdian_address,gaurdian_city,gaurdian_state,gaurdian_country,gaurdian_phone,gaurdian_mobile})
        await Student_data.save();
        if (Student_data) {
            console.log("Student_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Student_data);
        res.send(Student_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getStudent', async (req, res) => {
        try {
            const data = await Student.find().sort({ _id: -1 })
            if (data) {
                console.log(data[0])
            }
            console.log(data[0]+"finding data of single parent")
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })

    router.post('/singleparentdata', async (req, res) => {
        console.log(req.body.account_no+'yes im in')
        const { account_no } = req.body;
        try {
           const data = await Student.find({ account_no })
            if (data) {
                console.log(data)
            }
            
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching profile data" })
        }
    })
    router.post('/singlestudentdata', async (req, res) => {
        console.log('yes im in')
        const { admission_no } = req.body;
        try {
           const data = await Student.find({ admission_no })
            if (data) {
                console.log(data[0])
            }
            
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching profile data" })
        }
    })

    router.put('/updateStudent', upload.single('image') ,async (req, res) => {
        console.log("Yes I Am In")
        const { _id,session,date_of_admission,parent,admission_no,security_no,old_admission_no,aadhar_no,class_name,section,subjects,is_start_from_first_class,last_class,category,house,name,sex,dob,nationality,last_school,balance,fee_concession,bus_fare_concession,vehicle_no,is_teacher_ward,paid_upto_month,paid_upto_year,last_school_performance,is_full_free_ship,avail_transport,take_computer,no_exempt_security_deposit,ncc,no_exempt_registration,no_exempt_admission,is_repeater,other_details,misc_details,account_no,father_name,mother_name,father_occu,father_designation,father_annual_income,mother_occu,mother_desgination,mother_annual_income,parent_address,parent_city,parent_state,parent_country,parent_phone,parent_mobile,gaurdian_name,gaurdian_occu,gaurdian_designation,gaurdian_annual_income,gaurdian_address,gaurdian_city,gaurdian_state,gaurdian_country,gaurdian_phone,gaurdian_mobile } = req.body;
        const image = req.file.path
        Student.findByIdAndUpdate({_id},{ session,date_of_admission,parent,admission_no,security_no,old_admission_no,aadhar_no,class_name,section,subjects,is_start_from_first_class,last_class,category,house,name,sex,dob,nationality,last_school,balance,fee_concession,bus_fare_concession,vehicle_no,is_teacher_ward,paid_upto_month,paid_upto_year,last_school_performance,is_full_free_ship,avail_transport,take_computer,no_exempt_security_deposit,ncc,no_exempt_registration,no_exempt_admission,is_repeater,other_details,misc_details,account_no,father_name,mother_name,father_occu,father_designation,father_annual_income,mother_occu,mother_desgination,mother_annual_income,parent_address,parent_city,parent_state,parent_country,parent_phone,parent_mobile,gaurdian_name,gaurdian_occu,gaurdian_designation,gaurdian_annual_income,gaurdian_address,gaurdian_city,gaurdian_state,gaurdian_country,gaurdian_phone,gaurdian_mobile,image }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteFeeStructure', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        FeeStructure.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Student routes
// Start Fee Structure routes
    router.post('/StoreFeeStructure', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {session,class_name,section,total_one_time_fee,fees,total_monthly_fee,total_annual_fee,grand_total} = req.body;
    try {
        const Fee_structure_data = new FeeStructure({session,class_name,section,total_one_time_fee,fees,total_monthly_fee,total_annual_fee,grand_total})
        await Fee_structure_data.save();
        if (Fee_structure_data) {
            console.log("Fee_structure_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Fee_structure_data);
        res.send(Fee_structure_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.get('/getFeeStructure', async (req, res) => {
        try {
            const data = await FeeStructure.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })

    router.post('/FeeAmount', upload.single('image'),async (req, res) => {
        console.log('yes im in '+req.body.class_name)
        const { class_name,section } = req.body;
        console.log('yes im in '+class_name+" gfgdf "+section)
        try {
           const data = await FeeStructure.find({ class_name })
            if (data) {
                console.log(data[0])
            }
            
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching profile data" })
        }
    })

    router.post('/FeesClasswise', async (req, res) => {
        console.log('yes im in' + req.body.section)
        const { class_name,section } = req.body;
        try {
           const data = await FeeStructure.find({ class_name,section })
            if (data) {
                console.log(data[0])
            }
            
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching profile data" })
        }
    })


    router.put('/updateFeeStructure', upload.single('image') ,async (req, res) => {
        console.log("Yes I Am In")
        const { _id,session,class_name,section,total_one_time_fee,total_annual_fee,fees,total_monthly_fee,grand_total } = req.body;
        // const image = req.file.path
        FeeStructure.findByIdAndUpdate({_id},{ session,class_name,section,total_one_time_fee,total_annual_fee,fees,total_monthly_fee,grand_total }, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
    router.delete('/deleteFeeStructure', (req, res) => {
        const { _id } = req.body
        console.log(_id)
        FeeStructure.findByIdAndRemove(_id).exec();
        res.send({ res: "Deleted Sucessfully" })
    })
// end Fee Structure routes
// Start Fee Receipt routes
    router.post('/StoreReceipt', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const {receipt_date,receipt_no,ref_receipt_no,last_fee_date,session,admission_no,prospectus_fee,registration_fee,admission_fee,security_fee,account_no,paid_fees,paid_month,paid_months,paid_amount,balance,total_one_time_fee,total_monthly_fee,total_annual_fee,grand_total,payment_mode,bank,bank_v_no,check_no,bank_date} = req.body;
    try {
        const Fee_structure_data = new Receipt({receipt_date,receipt_no,last_fee_date,ref_receipt_no,session,admission_no,prospectus_fee,registration_fee,admission_fee,security_fee,account_no,paid_fees,paid_month,paid_months,paid_amount,balance,total_one_time_fee,total_monthly_fee,total_annual_fee,grand_total,payment_mode,bank,bank_v_no,check_no,bank_date})
        await Fee_structure_data.save();
        if (Fee_structure_data) {
            console.log("Fee_structure_data")
        }
        else {
            console.log("data is not stored")
        }
        console.log(Fee_structure_data);
        res.send(Fee_structure_data)
    } catch (err) {
        return res.status(422).send(err.message)
     
    }
    })

    router.post('/SearchOldfee', async (req, res) => {
        console.log('yes im in' + req.body.admission_no)
        const { admission_no } = req.body;
        try {
           const data = await Receipt.find({ admission_no })
            if (data) {
                console.log(data[0])
            }
            
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching profile data" })
        }
    })
    router.get('/getFeeReceipt', async (req, res) => {
        try {
            const data = await Receipt.find()
            if (data) {
                console.log(data[0])
            }
            console.log(data[0])
            res.send(data)
        }
        catch (err) {
            return res.status(422).send({ error: "error for fetching food data" })
        }
    })
    router.patch('/UpdateBalance',upload.single('image'),async (req, res) => {    
        const { _id,balance } = req.body;
        console.log(req.body)
        Student.findByIdAndUpdate({_id},{balance}, function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
    })
// End Fee Receipt routes
module.exports = router

