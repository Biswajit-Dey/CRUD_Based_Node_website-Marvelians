const User = require('../../models/userModel');
const nodemailer = require('nodemailer');

const userRegisterControl = async (req, res, next) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const exist = await User.findOne({email})

    if (exist) {
        req.flash("fail", "Account already exist");
        res.redirect("/user/register");
    }
    else {
        let rand = Math.floor(Math.random() * 10000);
        try {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SENDER_MAIL,
                    pass: process.env.MAIL_PASS
                }
            });
            var mailOptions = {
                from: 'bdeyxarcade2k23@gmail.com',
                to: `${email}`,
                subject: 'Email Verification',
                text: `Your one Time verification Code to sign up in Marvelians is: ${rand}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            console.log(email)

            req.flash("otp", rand);
            req.flash("fname", fname);
            req.flash("lname", lname);
            req.flash("email", email);
            req.flash("password", password);
            res.redirect('/user/otp');
        } catch (error) {
            next(error)
        }
    }

}

module.exports = userRegisterControl