// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

import Player from "../../db/model/player";

export default async (req, res) => {

  let players = await Player.findAll({
    include: { model: PlayerSkill, as: "playerSkills" },
  });

  return res.status(200).json(players);
};

