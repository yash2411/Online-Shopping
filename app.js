//built in packages
const path = require('path');

//third party packages
const express  = require('express');
const csrf = require('csurf');
const expressSession = require('express-session');

//included files
const authRoutes = require('./routes/auth.route');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const createSessionConfig = require('./config/session');
const productRoutes = require('./routes/products.route');
const baseRoutes = require('./routes/base.route');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const adminRoutes = require('./routes/admin.routes');
const protectRoutes = require('./middlewares/error-handler');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/products/assets/',express.static('product-data'));
app.use(express.urlencoded({extended: false})) //extended false to support regular form submission

const sessionConfig = createSessionConfig()
app.use(expressSession(sessionConfig))

app.use(csrf()); //This will executed as function and return actual middleware
app.use(addCsrfTokenMiddleware)

app.use(checkAuthStatusMiddleware)

app.use(baseRoutes);
app.use(authRoutes);
app.use(productRoutes);

app.use(protectRoutes);
app.use('/admin',adminRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase().then(function() {
    app.listen(3000);
}).catch(function(error) {
    console.log('Failed to connect to database');
    console.log(error)
});
