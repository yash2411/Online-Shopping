const { Db } = require('mongodb');
const User = require('../models/user.model')
const authUtil = require('../util/authentication');
const { emailConfirmed } = require('../util/valildation');
const validation = require('../util/valildation');

function getSignup(req, res) {
    res.render('customer/auth/signup')

};

async function signup(req, res, next) {
    if (!validation.userDetailsAreValid(req.body.email, req.body.password, req.body.fullname, req.body.street, req.body.postal, req.body.city) || !validation.emailConfirmed(req.body.email, req.body['confirm-email'])) {
        res.redirect('/signup')
        return;
    }
    const user = new User(req.body.email, req.body.password, req.body.fullname, req.body.street, req.body.postal, req.body.city);
    


    try {
        const existAlready = await user.existAlready();
        if(existAlready) {
            res.redirect('/signup');
            return;
        }
        await user.signup();
    }
    catch (error) {
        next(error); //This is will render the 500.ejs file
        return;
    }
    res.redirect('/login');
}

function getLogin(req, res) {
    res.render('customer/auth/login')

};

async function login(req, res) {
    const user = new User(req.body.email, req.body.password);
    let existingUser;
    try {
        existingUser = await user.getUserWithSameEmail();
    }
    catch (error) {
        next(error);
        return;
    }

    if (!existingUser) {
        res.redirect('/login');
        return;
    }
    const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

    if (!passwordIsCorrect) {
        res.redirect('/login');
        return;
    }

    authUtil.createUserSession(req, existingUser, function () {
        res.redirect('/')
    })

}

function logout(req, res) {
    authUtil.destroyUserAuthSession(req);
    res.redirect('/login');
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    signup: signup,
    login: login,
    logout: logout
};