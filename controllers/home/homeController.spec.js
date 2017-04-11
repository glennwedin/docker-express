var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var homeController = require('./homeController');


describe("HomeController", function() {
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
});
