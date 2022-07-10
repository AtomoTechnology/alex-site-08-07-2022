const crypto = require('crypto');
const catchAsync = require('../helpers/error/catchAsync');
const User = require('../db/models/user');
const Role = require('../db/models/role');
const appError = require('../helpers/error/appError');
const { encrypt, comparePassword } = require('../helpers/Security/bcript');
const {createToken,createSendToken} = require('../helpers/Security/SecurityBase');
const jwt = require('jsonwebtoken');

exports.signUp = catchAsync(async (req, res, next) => {
  console.log(req.body);
  try {
    if (!req.body.roleId) {
      const role = await Role.findOne({ where: { name: 'utilisateur' } });
      req.body.roleId = role.toJSON().id;
    }
  
    req.body.password = encrypt(req.body.password);
  
    await User.create(req.body);
  
    res.status(201).json({
      status: true,
      message:"L'utilisateur a été créé avec succès."
    });
  } catch (error) {
    return res.status(402).json({
      status: false,
      message:"L'utilisateur n'a pas pu être créé, faute de données. Contactez l'administrateur.",
      error:error
    });
  }
});

exports.signIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //validate email and password
  if (!email || !password) {
    return next(new appError('Veuillez saisir votre email et/ou votre mot de passe', 400));
  }

  const user = await User.findOne({
    where: { email: email, state: 1 },
    include: {
      model: Role,
      where: { state: 1 },
    },
  });

  //validate user and password
  if (!user || !(await comparePassword(password, user.dataValues.password))) {
    return next(new appError('Mot de passe et/ou email erroné', 401));
  }
  //create token

 var userjson = user.toJSON();
 const token =  jwt.sign({
    id: userjson.id,
    role: userjson.role.name,
    idRole: userjson.role.id,
    fullName: userjson.fullname,
    email: userjson.email
  },
  process.env.SECRET_TOKEN_Alex, {
    expiresIn: process.env.SECRET_TOKEN_Alex_INSPIRE_IN,
  });
  res.status(200).json({
    status: true,
    token: token
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  // await User.findByIdAndDelete(req.params.id);
  await User.update(
      {state: 2},
      {where: {id: id}}
    );
  res.status(200).json({
    status: 'success',
    data: {
      user: null,
    },
  });
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("Ce n'est pas un utilisateur avec cet e-mail .", 404));
  }

  const resetToken = user.createPasswordResetToken();

  await user.save({ validateBeforeSave: false }); //

  try {
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();
    res.status(200).json({
      status: 'success',
      message: 'Token a été envoyé par e-mail',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new AppError("Un problème est survenu lors de l'envoi de l'e-mail", 500));
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
 
  const hashToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Ce n'est pas un utilisateur pour ce token. Token invalide ou expiré ..", 404));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
 
  const user = await User.findOne({ where: { id: req.user.id } });

  if (!user || !(await comparePassword(req.body.currentPassword, user.password))) {
    return next(new appError('Mot de passe incorrect', 401));
  }
  req.body.password = encrypt(req.body.password);
  User.update({ password: req.body.password }, { where: { id: req.user.id } });


  res.status(200).json({
    status: true,
    message: 'Mot de passe mis à jour avec succès...',
  });
});
