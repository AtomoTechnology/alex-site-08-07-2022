const router = require('express').Router();
const rtservice = require('../Service/prayerpetitionService');

router.route('/').get(rtservice.GetAll);
router.route('/:id').get(rtservice.GetById);
router.route('/').post(rtservice.Create);
router.route('/:id').put(rtservice.Update);
router.route('/:id').delete(rtservice.Delete);

module.exports = router;