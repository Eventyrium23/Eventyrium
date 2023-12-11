const db = require("../models/index.js");
const Feedbacks = db.FeedBacks;


exports.getAll=async(req,res)=>{
    try{
        let feed=await Feedbacks.findAll({})
        res.status(200).json(feed)
    }catch(err){
        res.status(400).json(err)
    }
}


exports.newFeeds=async(req,res)=>{
    try{
        let newFeed=await Feedbacks.create(req.body)
        res.status(200).json(newFeed)
    }catch(err){
        res.status(400).json(err)
    }
}

// exports.getUserFeed=async(req,res)=>{
//     try{
//         let userfeed=await Feedbacks.findOne({where:{userId}})
//     }catch(err){

//     }
// }