const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    role:{
        type:String,
        enum:['client','admin'],
        default: ['client'],        
    },
    intro:{
        type:String,
        default:"Hey there! I am using ChatApp."
    },
    friend:{
        type:Array,
        default:[]
    },
    chat:{
        type:Object,
        default:{}
    }
    
},{timestamps:true})
module.exports = mongoose.model('User',userSchema);