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

async function getFlights(origin, destination, smallerDate, biggerDate) {
    const flights = [];
    let query = `
    SELECT
    flights.id,
    city_origin.name AS origin,
    city_destination.name AS destination,
    flights.date
    FROM flights
    JOIN cities AS city_origin ON flights.origin = city_origin.id
    JOIN cities AS city_destination ON flights.destination = city_destination.id`;
    const conditional = [];
    if(typeof origin !== 'undefined' && origin !== '') {
        flights.push(origin);
        conditional.push(`city_origin.name = $${flights.length}`);
    }
    if(typeof destination !== 'undefined' && destination !== '') {
        flights.push(destination);
        conditional.push(`city_destination.name = $${flights.length}`);
    }
    if(typeof smallerDate !== 'undefined' && smallerDate !== '') {
        flights.push(smallerDate);
        conditional.push(`date >= $${flights.length}`);
    }
    if(typeof biggerDate !== 'undefined' && biggerDate !== '') {
        flights.push(biggerDate);
        conditional.push(`date <= $${flights.length}`);
    }
    
    if (conditional.length > 0) {
        query += ' WHERE ' + conditional.join(' AND ');
    }
    query += ' ORDER BY flights.date';
    const res = await db.query(query, flights);
    return res;
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