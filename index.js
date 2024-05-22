const express = require('express');
const dotenv = require ("dotenv");
const path = require('path');
const session = require('express-session');
const flash = require("connect-flash")
const methodOverride = require('method-override');
const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser');
const AppError = require('./Utils/AppError');
const app = express();
const movieRoute = require('./routes/movieRoute')
const userRoute = require('./routes/userRoute')
dotenv.config();
let port = 80;

const mongodb = require("./config/conn")
mongodb.MongoDbConnection();
const User = require('./models/userModel');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(flash());


const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24,
    maxAge: 1000 * 60 * 60 * 24
  }
}

app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
})
app.use((req, res, next) => {
  res.locals.messages = req.flash("fail");
  next();
})
app.use((req, res, next) => {
  res.locals.otp = req.flash("otp");
  next();
})
app.use((req, res, next) => {
  res.locals.fname = req.flash("fname");
  next();
})
app.use((req, res, next) => {
  res.locals.lname = req.flash("lname");
  next();
})
app.use((req, res, next) => {
  res.locals.email = req.flash("email");
  next();
})
app.use((req, res, next) => {
  res.locals.pass = req.flash("password");
  next();
})

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'bdeyxarcade2k23@gmail.com',
//     pass: 'glbk wbjz bxjl xmuo'
//   }
// });

// ROUTES LINK SETUP==>>>

app.get("/user/otp", (req, res) => {
  res.render('movies/otp');
})

app.post("/user/otp", (req, res) => {
  const actual = req.body.otpSent;
  const value = req.body.otp;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;
  console.log(`actual: ${actual}, otp: ${value}, fname:${fname}`);
  if (actual == value) {
    User.create({
      firstname: fname,
      lastname: lname,
      email: email,
      password: password
    })
    res.redirect("/movies");
  }
  else {
    throw new AppError("OTP verification Unsuccessful", 400);
  }
})

app.use("/movies", movieRoute);
app.use("/user", userRoute);

app.all('*', (req, res, next) => {
  res.status(404).render('movies/noPage');
})

app.use((err, req, res, next) => {
  const { message = "Oh no Error!!!", status = 500 } = err;
  res.status(status).render('movies/invalid', { message });

})

app.listen(port, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
})