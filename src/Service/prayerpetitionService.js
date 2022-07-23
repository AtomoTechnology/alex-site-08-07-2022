const prayer = require('../db/models/prayerpetition');
const { Op } = require("sequelize");
const catchAsync = require('../helpers/error/catchAsync');

exports.GetAll = async(req, res) => {
    const {
        filter
    } = req.params;
    prayer.findAll({
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
    const {
        filter
    } = req.params;
    prayer.findOne({
        where: {
            [Op.and]:
            [
                {
                    id: req.id
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
      await prayer.create(req.body);    
      res.status(201).json({
        status: true,
        message:"VOTRE demande de prière a été créée avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Votre demande de prière n'a pas pu être créée.",
        error:error
      });
    }
});

exports.Update = catchAsync(async (req, res, next) => {
    try {  
      await prayer.update(
        {
            description: req.description,
            phone:req.phone,
            email:req.email
        },
        {where: {id: req.id}}
        );    
      res.status(201).json({
        status: true,
        message:"VOTRE demande de prière a été mise à jour avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Votre demande de prière n'a pas pu être mise à jour.",
        error:error
      });
    }
});

exports.Delete = catchAsync(async (req, res, next) => {
    try {  
      await prayer.update(
        {
            state: 2
        },
        {where: {id: req.id}}
        );    
      res.status(201).json({
        status: true,
        message:"VOTRE demande de prière a été supprimée avec succès."
      });
    } catch (error) {
      return res.status(402).json({
        status: false,
        message:"Votre demande de prière n'a pas pu être supprimée.",
        error:error
      });
    }
});
