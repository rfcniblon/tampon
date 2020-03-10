const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'farmviz',
    password: 'Guest1234$',
    database: 'farmviz'
});
module.exports = connection;
