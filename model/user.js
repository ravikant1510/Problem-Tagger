const mongoose  = require("mongoose");

const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
    },
    problems:{
        type:Array
    },
    tags:{
        type:Array
    },
    img:{
        type:String,
        default:"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
    }
});
 
module.exports = mongoose.model('user',userSchema);