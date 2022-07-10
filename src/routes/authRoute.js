const router = require('express').Router();
const authService = require('../Service/authService');

router.route('/signup').post(authService.signUp);
router.route('/signin').post(authService.signIn);
router.route('/forgetpassword').post(authService.forgotPassword);
router.route('/resetpassword').post(authService.resetPassword);
router.route('/updatepassword').post(authService.updatePassword);

module.exports = router;
