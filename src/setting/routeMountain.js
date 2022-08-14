const router = require('express').Router();
router.use('/api/v1/auth', require('../routes/authRoute'));
router.use('/api/v1/users', require('../routes/usersRoute'));
router.use('/api/v1/prayerpetitions', require('../routes/prayerpetitionRoute'));
router.use('/api/v1/profile', require('../routes/profileRoute'));

module.exports = router;
