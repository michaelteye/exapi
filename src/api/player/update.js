// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";
import database from "../index";

export default async (req, res) => {
  try {
    //Bernard remember to validate the request

    //get the player id
    const playerId = req.params.id;

    // check if the id exists in db
    let player = await Player.findOne({ where: { id: playerId } });

    if (player == null) {
      return res.status(404).json({ message: "Player does not exist" });
    }
    //update the player details with the incoming player data
    await player.update(
      {
        name: req.body.name,
        position: req.body.position,
      },
      {
        where: { id: playerId },
      }
    );
    //delete the already skills associated with this player
    await PlayerSkill.destroy({
      where: { playerId: player.id },
    });
    //get the player skills from the request body
    let playerSkills = req.body.playerSkills;

    //attach the new skills to the player
    playerSkills.forEach(async (playerSkill) => {
      await PlayerSkill.create({
        skill: playerSkill.skill,
        value: playerSkill.value,
        playerId: player.id,
      });
    });

    let updatedPlayer = await Player.findOne({
      where: { id: player.id },
      include: { model: PlayerSkill, as: "playerSkills" },
    });

    return res.json(updatedPlayer);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
