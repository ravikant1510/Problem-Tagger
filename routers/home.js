const express =require("express");
const req = require("express/lib/request");
const Question=require("../model/question");
const router=express.Router();

router.get("/home",async(req,res)=>{

    const user=req.session.username;
    const isLoggedIn=req.session.isLoggedIn;
    
    const question=await Question.find({author:{$ne:user}});

    const user_question=await Question.find({author:user});
    
    res.render("all_question.ejs",{isLoggedIn,user,question,user_question});

});

module.exports=router;