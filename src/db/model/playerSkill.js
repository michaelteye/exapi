// ---------------------------------------------------------------------------------------------
// YOU CAN MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// YOU SHOULD NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// ---------------------------------------------------------------------------------------------

import Sequelize from "sequelize";
import database from "../index";

const PlayerSkill = database.define(
  "playerSkill",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    skill: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Player Skill is required",
        },
        isAlpha: {
          msg: "Skill must contain only alphabets",
        },
        isIn: {
          args: [["defense", "attack", "speed", "strength", "stamina"]],
          msg: "Player skill is invalid",
        },
      },
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "skill value is required",
        },
        isNumeric: {
          msg: "skill value must contain only numbers",
        },
      },
    },
  },
  {
    timestamps: false,
  },
  { database, modelName: "player" }
);

PlayerSkill.associate = (models) => {
  models.PlayerSkill.belongsTo(models.Player);
};

export default PlayerSkill;