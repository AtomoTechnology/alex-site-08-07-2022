const router = require('express').Router();
const userService = require('../Service/userService');

router.route('/').get(userService.GetAll);
// router.get('/',userService.GetAll);
// router.route('/signin').post(authService.signIn);

module.exports = router;
