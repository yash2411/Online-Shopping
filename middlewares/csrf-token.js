function addCsrfToken(req, res, next) {
    res.locals.csrfToken = req.csrfToken(); //csrfToken method will available because of csrf method in app.js
    next(); //using next method next middleware in app.js will executed
}

module.exports = addCsrfToken