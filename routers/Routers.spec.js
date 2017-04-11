/*
*   Integration tests for the router
*/

/*
    //Unit test business logic when implemented
    var sinon = require('sinon');
    var chai = require('chai');
    var expect = chai.expect;

    describe("home", function() {
      it("should call json", function() {
        var req,res,spy;

        req = res = {};
        spy = res.json = sinon.spy();

        homeController.home(req, res);
        expect(spy.calledOnce).to.equal(true);
      });
    });
    describe("next", function() {
      it("should call json", function() {
        var req,res,spy;

        req = res = {};
        spy = res.json = sinon.spy();

        homeController.next(req, res);
        expect(spy.calledOnce).to.equal(true);
      });
    });
*/


const request = require('supertest');
const express = require('express');
const homeRouter = require('./home/HomeRouter');
const route404 = require('./route404');
const errors = require('../middleware/ErrorHandler');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/failhard', function(req, res) {
    throw 'This is error';
});
app.use(homeRouter)
app.use(route404);
app.use(errors);




describe("HomeController", function() {
    describe('GET /', function() {
        it('respond with json and status code 200', function(done) {
            request(app)
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
    describe('GET /next', function() {
        it('respond with json and status code 200', function(done) {
            request(app)
                .get('/next')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    // Test that 404 works
    describe('GET /superfunstupidpage', function() {
        it('fail superhard with a status of 404', function(done) {
            request(app)
                .get('/superfunstupidpage')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(404, done);
        });
    });

    //Test that failing works
    describe('GET /failhard', function() {
        it('fail superhard with a status of 500', function(done) {
            request(app)
                .get('/failhard')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(500, done);
        });
    });

});
