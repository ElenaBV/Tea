

const checkUser = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login');
    }
  };


  const checkAdmin = (req, res, next) => {

    if (req.session.user.name === "admin") {
      next();
    } else {
      res.redirect('/api/lk');
    }
  };


  module.exports = {checkUser, checkAdmin}