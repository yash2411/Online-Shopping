const express  = require('express');
const path = require('path');

const authRoutes = require('./routes/auth.route');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'))

app.use(authRoutes);

app.listen(3000);