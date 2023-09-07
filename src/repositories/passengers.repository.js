import { db } from "../database/database.js";

export async function login(firstName, lastName) {
    const res = db.query(`INSERT INTO passengers (firstName, lastName) VALUES ($1, $2);`, [firstName, lastName])
    return res;
}