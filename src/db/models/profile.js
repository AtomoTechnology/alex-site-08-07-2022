const { Model, DataTypes } = require('sequelize');
const sql = require('./../db');

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false,
      unique:true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    profilepicture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING,
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
    modelName: 'profiles',
  }
);

module.exports = Profile;
