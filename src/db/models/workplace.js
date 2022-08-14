const { Model, DataTypes } = require('sequelize');
const sql = require('./../db');

class Workplace extends Model {}

Workplace.init(
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
    businessname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateTo: {
      type: DataTypes.DATE,
      allowNull: false,
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
    modelName: 'workplaces',
  }
);

module.exports = Workplace;
