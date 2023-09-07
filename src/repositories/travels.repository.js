import { db } from "../database.connection.js";

async function checkCity(name) {
    const res = await db.query(`SELECT * FROM cities WHERE name = $1;`, [name]);
    return res.rows;
}

async function postCity(name) {
    const res = db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
    return res.rows;
}

async function postFlight(origin, destination, date) {
    const res = db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
    return res.rows;
}

async function postTravel(passengerId, flightId) {
    const res = db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId]);
    return res.rows;
}

async function getFlights() {
    const res = db.query(`SELECT * FROM flights;`);
    return res.rows;
}

const travelsRepository = {
    checkCity,
    postCity,
    postFlight,
    postTravel,
    getFlights
}

export default travelsRepository;