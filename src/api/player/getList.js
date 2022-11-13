// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";

// export default async (req, res) => {
//   res.sendStatus(500);
// }
const players = {
  "kofi mart":{
    "name":"kofi mart",
    "position":"midfielder",
    "playerSkills":[
      {
        "skill":"defense",
        "value":60
      },
      {
        "skill":"speed",
        "value":80
      }
    ]
  },
  "Alfred Map":{
    "name":"Alfred Map",
    "position":"defender",
    "playerSkills":[
      {
        "skill":"attack",
        "value":70
      },
      {
        "skill":"strength",
        "skill":"stamina",
        "value":80
      }
    ]
  },
  "message":"Invalid for position: midfielder1"
  
}

app.get( "/all",async (req,res)=>{
 
 try {
  const players = await Player.find();
  res.status(200).json(players)
 } catch (error) {
   res.sendStatus(500)
 }
 
})

// adey come wai. adey search the error for ma machine top
export default async ('/:player',async (req,res) => {
  try{
    const {player} = req.params
   
    const currentPlayer = await Player.findByPk(player);
    return res.status(200).send(currentPlayer)

}
catch(err){
res.sendStatus(500);
}
})
