const user = require('../db/models/user');
const role = require('../db/models/role');
const factory = require('../Service/Generic/handlerFactory');

exports.GetAll = async(req, res) => {
    const {
        filter
    } = req.params;
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

// exports.GetAll = factory.getAll(user);
