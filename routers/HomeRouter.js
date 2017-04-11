var express = require('express')
var homeController = require('../controllers/home/homeController');
var router = express.Router();

router.get('/', homeController.home);
router.get('/next', homeController.next);


module.exports = router;
