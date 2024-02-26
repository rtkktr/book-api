const { MongoClient } = require('mongodb')
require('dotenv').config();

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        // asynchronous task

        MongoClient.connect(process.env.MONGODB_URI)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            })
    },
    getDb: () => dbConnection
}