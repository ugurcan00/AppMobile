const { Router} =  require('express');
const router = Router();

const { AllUsers } = require('../controller/AllUsers');
const { Auth } = require('../controller/Auth');

router.get('/AllUsers',AllUsers);
router.get('/Auth',Auth);

module.exports = router