const mysql      = require('mysql')
const settings   = require('./db-settings.json')
const connection = mysql.createConnection(settings)

connection.connect();

// connection.end();

module.exports = connection;