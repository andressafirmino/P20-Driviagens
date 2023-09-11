import { db } from "../database.connection.js";

async function postPassenger(firstName, lastName) {
    const res = await db.query(`
    INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)
    ;`, [firstName, lastName])
    return res;
}

async function getPassengerTravel(name) {

    const passengerTravel = [];
    let query =`
    SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger,
    COUNT (travels."passengerId") AS travels
    FROM travels
    JOIN passengers ON travels."passengerId" = passengers.id 
    `
    const conditional = [];
    if(typeof name !== 'undefined' && name !== '') {
        passengerTravel.push("%" + name + "%");
        conditional.push(`WHERE passengers."firstName" ILIKE $${passengerTravel.length} OR passengers."lastName" ILIKE $${passengerTravel.length}`);
    }
    query += conditional.join(" ");

query += `
    GROUP BY passengers."firstName", passengers."lastName"
    ORDER BY travels DESC`;
    const res = await db.query(query, passengerTravel);
    return res;
}

const passengersRepository = {
    postPassenger,
    getPassengerTravel
}

export default passengersRepository;