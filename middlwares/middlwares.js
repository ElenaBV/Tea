

const checkUser = (req, res, next) => {
    if (req.session.login) {
      next();
    } else {
      res.redirect('/log');
    }
  };



  module.exports = {checkUser,}