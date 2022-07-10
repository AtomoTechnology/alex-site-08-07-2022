const jwt = require('jsonwebtoken');
const  User  = require('../../db/models/user');
const { promisify } = require('util');

exports.createToken = (user) => {
  return jwt.sign({
      id: user.id,
      role: user.role.name,
      idRole: user.role.id,
      fullName: user.fullname,
      email: user.email
    },
    process.env.SECRET_TOKEN_Alex, {
      expiresIn: process.env.SECRET_TOKEN_Alex_INSPIRE_IN,
    });
};
// module.exports = createToken;

const createSendToken = async (user, statusCode, res) => {
  const token = createToken(user);

  res.status(statusCode).json({
    status: true,
    token,
    data: {
      user,
    },
  });
};
module.exports = createSendToken;

const verifyToken = async (req, res, next) => {
  try {
      const token = req.headers["x-access-token"];
      if (!token) {
          return res.status(400).json({
              error: "token",
              message: "Vous n'êtes pas connecté, veuillez vous connecter"
          });
      }

      const decode = jwt.verify(token, config.SECRET);

      req.id = decode.idaccount;
      req.role = decode.role;
      req.idRole = decode.idRole;
      
      User.findOne({
          attributes: ['id', 'email', 'adress', 'state'],
          where: {
              state: 1,
              id: req.id
          }
      })
      .then( result =>{            
          if (result == null) {
              return res.status(401).json({
                  error: "error",
                  message: "Cet utilisateur n'existe plus ou a été désabonné"
              });
          }
          next();
      });
  } catch (e) {
      return res.status(402).json({
          error: "token",
          message: "Pas autorisé"
      });
  }
};
module.exports = verifyToken;

const IsmailValid = (req, res, next) => {
  try {
      let {email} = req.body;
      const isEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
      if(!isEmail.test(email)){
          return res.status(402).json({
              title:"format incorrect",                    
              message:"Cette adresse e-mail: " + email + " n'est pas valide"
          }); 
      }
      else{
          next();
      }
  } catch (error) {
      return res.status(402).json({
          title:"format incorrect",                    
          message:"Erreur inconnue"
      }); 
  }  
}
module.exports = IsmailValid;

const isUserValid = (req, res, next) =>{
  try {
      if(req.body.userName.length < 6){
          return  res.status(402).json({
              title:"Erreur",                    
              message:"L'utilisateur doit avoir au moins 6 caractères"
          });              
      }
      else if(req.body.userName.length > 50){
          return  res.status(402).json({
              title:"Erreur",                    
              message:"L'utilisateur doit avoir au moins 50 caractères"
          }); 
      }
      else{
          next();
      }
      
  } catch (error) {
      return  res.status(402).json({
          title:"Erreur",                    
          message:"Erreur inconnue"
      }); 
  }
}
module.exports = isUserValid;