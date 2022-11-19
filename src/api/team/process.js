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
  try{
    const team = await Player.create(
      {

        position:req.body.position,
        mainSkill: req.body.playerSkils,
        numberOffPlayers:req.body.numberOffPlayers
      },
      {
        include:[
          {
            association:teamName,
            as: "playerSkils"
          },
        ],
      }
    );
    let saveTeam = await Player.findAll({
      where:{id: team.id},
      include: { model: PlayerSkill, as: "playerSkils"}
    });
    res.json(saveTeam)
  }
  catch(error){
    return res.status(400).json({ message: error.message });

      }
  
};

