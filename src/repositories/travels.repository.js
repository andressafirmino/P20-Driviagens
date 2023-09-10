import { db } from "../database.connection.js";

async function checkCity(name) {
    const res = await db.query(`
    SELECT * FROM cities WHERE name = $1
    ;`, [name]);
    return res.rows;
}

async function postCity(name) {
    const res = db.query(`
    INSERT INTO cities (name) VALUES ($1)
    ;`, [name]);
    return res;
}

async function checkCities(origin, destination) {
    const res = await db.query(`
    SELECT COUNT(*) FROM cities WHERE id IN ($1, $2)
    ;`, [origin, destination])
    return res.rows[0];
}

async function postFlight(origin, destination, date) {
    const res = db.query(`
    INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)
    ;`, [origin, destination, date]);
    return res;
}

async function checkPassenger (id) {
    const res = await db.query(`
    SELECT * FROM passengers WHERE id = $1
    ;`, [id]);
    return res.rows;
}

async function checkFlight (id) {
    const res = await db.query(`
    SELECT * FROM flights WHERE id = $1
    ;`, [id]);
    return res.rows;
}

async function postTravel(passengerId, flightId) {
    const res = db.query(`
    INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)
    ;`, [passengerId, flightId]);
    return res.rows;
}

async function getFlights() {
    const res = db.query(`
    SELECT * FROM flights
    ;`);
    return res.rows;
}

const travelsRepository = {
    checkCity,
    postCity,
    checkCities,
    postFlight,
    checkPassenger,
    checkFlight,
    postTravel,
    getFlights
}

export default travelsRepository;