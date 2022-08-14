const { Model, DataTypes } = require('sequelize');
const sql = require('./../db');

class KnowledgeUser extends Model {}

KnowledgeUser.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false,
      unique:true
    },
    profileId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'profiles',
        key: 'id',
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
      validate: {
        isIn: {
          args: [[1, 0]],
          msg: 'Solo permite 0 | 1',
        },
      },
    },
  },
  {
    sequelize: sql,
    modelName: 'knowledgeusers',
  }
);

module.exports = KnowledgeUser;
