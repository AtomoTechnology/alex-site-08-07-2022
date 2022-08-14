const user = require('../db/models/user');
const profile = require('../db/models/profile');
const KnowledgeUser = require('../db/models/KnowledgeUser');
const workplace = require('../db/models/workplace');

const catchAsync = require('../helpers/error/catchAsync');
const { Op } = require("sequelize");

exports.GetAll = async(req, res) => {
    profile.findAll({
        attributes: ['id', "userId", 'profilepicture', 'instagram', 'twitter', "facebook", 'state'],
        include:[
            {
                model: KnowledgeUser,              
                where:{
                    state: 1
                },
                required: true
            },
            {
                model: workplace,              
                where:{
                    state: 1
                },
                required: true
            }
        ] ,
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
    profile.findOne({
        include:[
            {
                model: KnowledgeUser,              
                where:{
                    state: 1
                },
                required: true
            },
            {
                model: workplace,              
                where:{
                    state: 1
                },
                required: true
            }
        ],
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

exports.Create = catchAsync(async (req, res, next) => {
    try {  
      await profile.create(req.body);    
      res.status(201).json({
        status: true,
        message:"Ton perfil a été créée avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Ton perfil n'a pas pu être créée.",
        error:error
      });
    }
});

exports.Update = catchAsync(async (req, res, next) => {
    try {  
      await profile.update(
        {
            profilepicture: req.profilepicture,
            instagram:req.instagram,
            twitter:req.twitter,
            facebook:req.facebook
        },
        {
            where: {
                [Op.and]:
                [
                    {id: req.id},
                    {userId: req.userId}
                ]
            }           
        });    
      res.status(201).json({
        status: true,
        message:"Ton perfil a été mises à jour avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Ton perfil n'a pas pu être mises à jour avec succès.",
        error:error
      });
    }
});

exports.Delete = catchAsync(async (req, res, next) => {
    try {  
      await profile.update(
        {
            state: 2
        },
        {where: {id: req.id}}
        );    
      res.status(201).json({
        status: true,
        message:"Ton profil a été supprimées avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Ton profil n'a pas pu être supprimées.",
        error:error
      });
    }
});

