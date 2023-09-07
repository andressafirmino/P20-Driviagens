import passengersRepository from "../repositories/passengers.repository.js";

async function postPassenger(firstName, lastName) {
    return passengersRepository.postPassenger(firstName, lastName);
}

async function getPassengerTravel() {
    const passengersTravels = await passengersRepository.getPassengerTravel();    
}

const passengersService = {
    postPassenger,
    getPassengerTravel
}

export default passengersService;