const user = require('../db/models/user');
const role = require('../db/models/role');
const catchAsync = require('../helpers/error/catchAsync');
const { Op } = require("sequelize");

exports.GetAll = async(req, res) => {
    user.findAll({
        attributes: ['id', "roleId", 'firstname', 'lastname', 'createdAt', "email", "adress", "updatedAt", 'phone', 'state'],
        include:[
            {
                model: role,              
                where:{
                    state: 1
                },
                required: true
            }] ,
        where: {
            state: 1
        },
        order: [
            ['id', 'DESC'],
        ]
    }).then(result => {
        res.json(result);
    })
}

exports.GetById = async(req, res) => {
    const { id } = req.params;
    user.findOne({
        include:[
            {
                model: role,              
                where:{
                    state: 1
                },
                required: true
            }],
        where: {
            [Op.and]:
            [
                {
                    id: id
                },
                {
                    state: 1
                }
            ]   
        },
        order: [
            ['id', 'DESC'],
        ]
    }).then(result => {
        res.json(result);
    })
}

exports.Update = catchAsync(async (req, res, next) => {
    try {  
      await user.update(
        {
            firstname: req.firstname,
            lastname:req.lastname,
            phone:req.phone,
            adress:req.adress
        },
        {where: {id: req.id}}
        );    
      res.status(201).json({
        status: true,
        message:"Vos données utilisateur ont été mises à jour avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Vos données utilisateur n'ont pas pu être mises à jour avec succès.",
        error:error
      });
    }
});

exports.Delete = catchAsync(async (req, res, next) => {
    try {  
      await user.update(
        {
            state: 2
        },
        {where: {id: req.id}}
        );    
      res.status(201).json({
        status: true,
        message:"Vos données utilisateur ont été supprimées avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Vos données d'utilisateur n'ont pas pu être supprimées.",
        error:error
      });
    }
});

