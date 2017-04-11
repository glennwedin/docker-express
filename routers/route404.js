var express = require('express');
var router = express.Router();

router.all('*', function(req, res) {
	res.status(404).render('shared/404');
});

module.exports = router;
