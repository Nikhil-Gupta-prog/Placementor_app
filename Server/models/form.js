const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true,
        trim:true
    },
    degree:{
        type:String,
        required:true,
        trim:true
    },
    stream:{
        type:String,
        required:true,
        trim:true 
    },
    secondary:{
        type:Number,
        required:true,
        trim:true

    },
    higher_secondary:{
        type:Number,
        required:true,
        trim:true

    },
    year:{
        type:Number,
        required:true,
        trim:true
    },
    aggregate:{
        type:Number,
        required:true,
        trim:true
    },
    backlog:{
        type:Number,
        required:true,
        trim:true
    },
    additional_skills:{
       type:Array,
       trim:true 
    }

},{
timestamps:true
})

const Form = mongoose.model("Form",formSchema);
module.exports = Form;