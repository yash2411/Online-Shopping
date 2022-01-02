const mongodbStore = require('connect-mongodb-session');
const expressSession = require('express-session');

function createSessionStore() {
    const MongodbStore = mongodbStore(expressSession); //expressSession is a session provider
    const store = new MongodbStore({ //we have to pass some arguments to connect with mongodb database
        uri: 'mongodb://localhost:27017',
        databaseName: 'online-shop',
        collection: 'sessions'
    });

    return store;
}

function createSessionConfig() {
    return {
        secret: 'super-secret',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2*24*60*60*1000,
        }
    }
}

module.exports = createSessionConfig;