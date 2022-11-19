// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

export default async (req, res) => {
  try {
    //set the default token
    const token =
      "SkFabTZibXE1aE14ckpQUUxHc2dnQ2RzdlFRTTM2NFE2cGI4d3RQNjZmdEFITmdBQkE=";
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader == "undefined") {
      return res
        .status(403)
        .json({ message: "You are not authorized to perfrom this action." });
    }
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    //the bearer
    if (bearerToken !== token) {
      return res
        .status(403)
        .json({ message: "Invalid Authorization token supplied." });
    }

    let player = await Player.findOne({ where: { id: req.params.id } });

    if (player == null) {
      return res.status(404).json({ message: "Player does not exist" });
    }
    //first delete all the player assciations
    await PlayerSkill.destroy({
      where: { playerId: player.id },
    });

    //then  delete the player
    await Player.destroy({
      where: { id: req.params.id },
    });

    return res.json({ message: "Player Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};
