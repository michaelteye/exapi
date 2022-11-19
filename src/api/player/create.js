// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

const PlayerSkills = Player.hasMany(PlayerSkill, { as: "playerSkills" });

export default async (req, res) => {
  try {
    const player = await Player.create(
      {
        name: req.body.name,
        position: req.body.position,
        playerSkills: req.body.playerSkills,
      },
      {
        include: [
          {
            association: PlayerSkills,
            as: "playerSkills",
          },
        ],
      }
    );

    let savedPlayer = await Player.findOne({
      where: { id: player.id },
      include: { model: PlayerSkill, as: "playerSkills" },
    });

    res.json(savedPlayer);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};