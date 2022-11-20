// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";
const PlayerSkills = Player.hasMany(PlayerSkill, { as: "playerSkill" });

export default async (req, res) => {
  let teamRequests = req.body;

  await teamRequests.forEach(async (teamRequest) => {
    let player = await Player.findAll({
      where: { position: teamRequest.position },
      limit: teamRequest.numberOfPlayers,
      attributes: ["name", "position"],
      include: {
        model: PlayerSkill,
        as: "playerSkills",
        attributes: ["skill", "value"],
        where: {
          skill: teamRequest.mainSkill,
        },
      },
    });

    res.json(player);
    //return res.json(player);
  });

  return;
};
