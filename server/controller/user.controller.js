const User = require('../model/user.book')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports.register = (req, res) => {
    
    User.create(req.body)
    .then(user => {
        const userToken = jwt.sign({
            id: user._id
        }, "first key value");
 
        res.cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!", user: user });
    })
    .catch(err => res.json(err));

}

module.exports.login= async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log(`${process.env.FIRST_SECRET_KEY}`);
    if(user === null) {
       
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
 
    if(!correctPassword) {
       
        return res.sendStatus(400);
    }
 
    
    const userToken = jwt.sign({
        id: user._id
    }, "first key value");
 
    
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!", user: user});
}


module.exports.logout= (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}