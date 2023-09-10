import { db } from "../database.connection.js";

async function postPassenger(firstName, lastName) {
    const res = await db.query(`
    INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)
    ;`, [firstName, lastName])
    return res;
}

async function getPassengerTravel() {
    const res = db.query(`
    SELCT * FROM "passengersTravels"
    ;`);
    return res.rows;
}

const passengersRepository = {
    postPassenger,
    getPassengerTravel
}

export default passengersRepository;