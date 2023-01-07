const mongoose=require('mongoose');
const nodemon = require('nodemon');

const Schema = mongoose.Schema;

const patientSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    tags:{
       type:Array,
       required:true
    },
    medication:{
       type:Array,
       required:true
    },
    city:{
        type:String,
        required:true
    },
    AdharNo:{
        type:String
    },
    results:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    }

})
                             //name to import, schema , db name 
module.exports=mongoose.model('patients',patientSchema,'Patients');