'use strict';
const express = require('express')
const bodyParser = require('body-parser');
const homeRouter = require('./routers/home/HomeRouter');
const route404 = require('./routers/route404');
const errors = require('./middleware/ErrorHandler');

var app = express()
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use('/static', express.static('public'));

//Error handling
app.use(errors);

//Routers
app.use('/', homeRouter);

//404-router
app.use(route404);

app.listen(process.env.PORT || 3000, function () {
	console.log("Listening to "+process.env.PORT);
})

// Graceful shutdown - do cleanup here
process.on('SIGINT', function() {
	console.log('Shutting down');
	process.exit(1);
});
