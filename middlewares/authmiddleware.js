const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const flash = require("connect-flash")

const authMiddleware = (req, res, next) => {
    try {
      const token = req.cookies.Bearer;
      if (!token) {
        req.flash("fail","you need to login first");
        res.redirect("/user/admin")
      } else {
        const validate = jwt.verify(token, "thisShouldBeanENV");
        console.log(validate);
        next();
      }
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = authMiddleware;