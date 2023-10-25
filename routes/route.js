const router = require('express').Router();
const { signup } = require('../controller/appController');
const { getbill } = require('../controller/appController');

// HTTP request
router.post('/user/signup', signup);
router.post('/product/getbill', getbill);

module.exports = router;