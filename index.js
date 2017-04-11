'use strict';
var express = require('express')
var bodyParser = require('body-parser');

var homeRouter = require('./routers/HomeRouter');

var app = express()

app.use(bodyParser.json());
app.use('/static', express.static('public'));
app.use('/', homeRouter);

app.listen(process.env.PORT || 3000, function () {
	console.log("Listening to "+process.env.PORT);
})

process.on('SIGINT', function() {
	console.log('Shutting down');
	process.exit(1);
});
