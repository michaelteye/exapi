// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

export default async (req, res) => {
  // Working with the get request
  let players = await Player.findAll({
    include: { model: PlayerSkill, as: "playerSkills" },
  });

  return res.status(200).json(players);
};
