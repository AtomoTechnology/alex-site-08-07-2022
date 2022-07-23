const { Model, DataTypes } = require('sequelize');
const sql = require('./../db');

class PrayerPetition extends Model {}

PrayerPetition.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false,
      unique:true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Tu devrais écrire ta petition' },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'Tu devrais introduir ton numero de telephone' },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: { msg: 'Tu devrais écrire ton courrier eletronique' },
      },
    },
    state: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
  },
  {
    sequelize: sql,
    modelName: 'prayerpetitions',
  }
);

module.exports = PrayerPetition;
