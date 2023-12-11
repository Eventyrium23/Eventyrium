const db = require("../models/index.js")
const Invitation = db.invitation
exports.makeInv = async (req,res)=>{
    
    const { receiver,sender,avenue,status}= req.body
    try {
        const newInvitation = {
            receiver: receiver,
            sender: sender,
            avenue: avenue,
            status: status
          };
          await Invitation.create(newInvitation);
      
          res.status(200).json("invite sent");
        }catch(err){
        res.status(400).json(err)
        }
      
}

exports.allInv = async (req,res)=>{
    const {sender} = req.body
    try {
        var data = await Invitation.findAll( {where:{sender :sender }})
        res.json(data)
    }catch(err){
        res.json(err)
    }
} 
exports.acceptInv = async (req,res)=>{
    console.log(req.body);
    const {id} = req.body 
  try {
   await Invitation.update({status:'accepted'},
   {
    where :{
        id : id
    }  
}
 )
  }catch (err){

  }
}

exports.declineInv = async (req,res)=>{
    const {id} = req.body
    try {
        Invitation.destroy({where :{
            id : id
        }})
        res.status(200).json('Invite Deleted')
    }catch(err){
        res.status(420).json('err')
    }
}

exports.changeAvenue = async (req,res)=>{
    const {newAvenue,event} =  req.body
    
    try {  
      await Invitation.update(
        {avenue: newAvenue},{
            where : { event : event }
        }
        )
        res.status(200).json("Avenue Changed")
    }catch(err){
    res.status(400).json(err)
    }
}
  
  