const mysql = require('mysql2/promise');

const connection = async () => {
    const result = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "surfing"
    });
    return result;
}

module.exports = connection;
