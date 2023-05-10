const router = require('express').Router();
const thoughtRoute = require('./thoughtroute');
const userRoute = require('./userroute');

router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);

module.exports = router;