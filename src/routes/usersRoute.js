const router = require('express').Router();
const rtservice = require('../Service/userService');

router.route('/').get(rtservice.GetAll);
router.route('/:id').get(rtservice.GetById);
router.route('/:id').put(rtservice.Update);
router.route('/:id').delete(rtservice.Delete);

module.exports = router;
