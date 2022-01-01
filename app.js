//built in packages
const path = require('path');

//third party packages
const express  = require('express');
const csrf = require('csurf')

//included files
const authRoutes = require('./routes/auth.route');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false})) //extended false to support regular form submission

app.use(csrf()); //This will executed as function and return actual middleware
app.use(addCsrfTokenMiddleware)

app.use(authRoutes);

db.connectToDatabase().then(function() {
    app.listen(3000);
}).catch(function(error) {
    console.log('Failed to connect to database');
    console.log(error)
});
