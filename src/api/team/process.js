// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

// export default async (req, res) => {
//   res.sendStatus(500);
// }

// mine concept
// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

// import the various data to help solve the problem
import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

const teamName = Player.hasMany(PlayerSkill,{as: "playerSkils"})


export default async (req, res) => {
  // try{
      let allteam = await Player.findAll({
        where: {
          position: Math.max(req.body.position)
        }
      })
      return res.status(200).json(allteam)
    // }
    // catch(err){
    //   res.status(500).json({message:"Internal Server Error"})

    // }

   


}
