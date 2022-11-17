// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";

// export default async (req, res) => {
//   res.sendStatus(500);
// }


app.get( "/all",async (req,res)=>{
 
  res.sendStatus(200);
 
})

// // adey come wai. adey search the error for ma machine top
// export default async ('/:player',async (req,res) => {
//   try{
//     const {player} = req.params
   
//     const currentPlayer = await Player.findByPk(player);
//     return res.status(200).send(currentPlayer)

// }
// catch(err){
// res.sendStatus(500);
// }
// })
