// const connection = require('../config/database/getConnection');
const mysql = require('mysql2/promise');

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
    const result = [];
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "surfing"
    });
    const [rows, fields] = await connection.query("SELECT * from spots");
    rows.forEach((row) => {
        let spot = {
            spot_id: row.spot_id,
            name: row.name,
            address: row.address,
            description: row.description,
            date_visited: formatDate(row.date_visited)
        };
        result.push(
            spot
        )
    });

    return result;
}

module.exports = {
    getSpots: getSpots,
};
