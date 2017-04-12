module.exports = function(err, req, res, next) {
  res.status(500).render('shared/500', {error: err});
}
