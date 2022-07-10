const router = require('express').Router();
router.use('/api/v1/auth', require('../routes/authRoute'));
router.use('/api/v1/users', require('../routes/usersRoute'));

module.exports = router;
