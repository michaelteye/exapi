// ---------------------------------------------------------------------------------------------
// YOU CAN MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// YOU SHOULD NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// ---------------------------------------------------------------------------------------------

import Sequelize from "sequelize";
import database from "../index";

const Player = database.define(
  "player",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Player name is required",
        },
        len: {
          args: [1, 200],
          msg: "Player name's length must be between 1 and 200 characters",
        },
      },
    },
    position: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Player position is required",
        },

        isIn: {
          args: [["defender", "midfielder", "forward"]],
          msg: "Player position is invalid",
        },
      },
    },
  },
  {
    database,
    modelName: "playerSkill",
    timestamps: false,
  }
);

Player.associate = (models) => {
  models.Player.hasMany(models.PlayerSkill);
};

export default Player;
