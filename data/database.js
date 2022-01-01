const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {

   const client = await MongoClient.connect('mongodb://localhost:27017'); //client will have internal information of database server connection
   database = client.db('online-shop');
}

function getDb(){
    if(!database) {
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}