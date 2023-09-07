
export async function postCity(req, res) {
    const {name} = req.body;
}

export async function postFlight(req, res) {
    const {origin, destination, date} = req.body;
}

export async function postTravel(req, res) {
    const {passengerId, flightId} = req.body;
}

export async function getFlights(req, res) {
    
}