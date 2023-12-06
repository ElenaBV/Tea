

const checkUser = (req, res, next) => {
    if (req.session.login) {
      next();
    } else {
      res.redirect('/log');
    }
  };


  const checkAdmin = (req, res, next) => {

    if (req.session.user.name === "admin") {
      next();
    } else {
      res.redirect('/api/lk');
    }
  };


  module.exports = {checkAdmin}