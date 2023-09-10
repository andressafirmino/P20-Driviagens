export function conflictCitiesError() {
    return {
        type: "conflictCities",
        message: `A origem e o destino não podem ser iguais!`
    }
}