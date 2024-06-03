const mongoose = require("mongoose");
// Creating Schema
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true, 
            maxLength:50,
        }, 
         
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);
// Use this Schema as Todo name 
module.exports = mongoose.model("Todo", todoSchema);
