const User = require('../model/user.book'); // Import your User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// User registration
module.exports.createBook=(request,response)=>{
    bookmodel.create(request.body)
            .then(AddBook=>{
                response.json({Book:AddBook})
            })
            .catch(err=>response.status(400).json(err))
}
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

};

// User login
module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log( `${process.env.FIRST_SECRET_KEY}`)
    if (user === null) {
        return res.sendStatus(400); // Email not found
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        return res.sendStatus(400); // Incorrect password
    }

    const userToken = jwt.sign({
        id: user._id
    }, "first key value");

    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!" , user:user });
};

// User logout
module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
};
