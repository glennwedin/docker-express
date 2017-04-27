var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.json({'home': true});
});
router.get('/next', function(req, res) {
	res.json('next');
});


module.exports = router;
