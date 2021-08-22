const config = require('../config/database/config');

function formatDate(date_visited) {
    const rsDate = new Date(date_visited);
    const resultDate = new Date();
    resultDate.setDate(rsDate.getDate());
    resultDate.setMonth(rsDate.getMonth());
    resultDate.setFullYear(rsDate.getFullYear());
    const date = resultDate.toISOString().slice(0, 10);
    return date;
}

const getSpots = async () => {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.query("SELECT * from spots");
    return rows.map((row) => {
        return ({
            spot_id: row.spot_id,
            name: row.name,
            address: row.address,
            description: row.description,
            date_visited: formatDate(row.date_visited)
        });
    });
}

module.exports = {
    getSpots: getSpots,
};
