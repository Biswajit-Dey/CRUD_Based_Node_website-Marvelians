const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = async (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;    
    
    const user = await User.findOne({email});
    if(!user){
        res.clearCookie('Bearer');
        req.flash("fail","Email or Password mismatched");
        res.redirect("/user/admin")
    }
    else{
       const valid = await bcrypt.compare(password, user.password);
       if(valid){
        const token = jwt.sign({
            email: email,
            password: password
        },
        process.env.JWT_SECRET,
        { expiresIn: 60*60 });
        res.clearCookie('Bearer');
        res.cookie("Bearer", token,{
            expires: new Date(Date.now() + 3600000),
            httpOnly: true
        });
        res.redirect("/movies")
       }
       else{
        req.flash("fail","Email or Password mismatched");
        res.clearCookie('Bearer');
        res.redirect("/user/admin");
       }
    }
}

module.exports = authController

