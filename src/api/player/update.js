// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

export default async (req, res) => {
  /* try { */
  //Bernard remember to validate the request

  //get the player id
  const playerId = req.params.id;

  let updatePlayer = Player.findOne({
    where: { id: playerId },
    include: [
      {
        model: PlayerSkill,
        as: "playerSkills",
      },
    ],
  }).then((player) => {
    if (!player)
      return res.status(404).json({ message: "Player does not exist" });

    //return res.json(player);
    player.playerSkills.skill = "Hello, world";
    player.playerSkills.value = 80;
    player.save();

    return res.json(player); //or res.json('ok updated');
  });

  //check if the id exists in db
  // let player = await Player.findOne({ where: { id: playerId } });

  // if (player == null) {
  //   return res.status(404).json({ message: "Player does not exist" });
  // }

  // let updatePlayer = await Player.update(
  //   {
  //     name: req.body.name,
  //     position: req.body.position,
  //     playerSkills: req.body.playerSkills,
  //   },
  //   {
  //     where: { id: playerId },
  //   },
  //   {
  //     include: {
  //       association: UpdatePlayerSkills,
  //       as: "updatePlayerSkills",
  //     },
  //   }
  // );

  // let updatedPlayer = await Player.findOne({
  //   where: { id: player.id },
  //   include: { model: PlayerSkill, as: "playerSkills" },
  // });

  //  res.json(updatedPlayer);
  /* } catch (error) {
    res.status(500).send(error);
  } */
};
