const mongoose=require('mongoose')
const validator=require('validator');

const studentRegistration = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    phoneNumber:{
        type:Number,
        maxLength:[10,"you exceed maximum character"]
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Student=new mongoose.model('student',studentRegistration)

module.exports= Student;