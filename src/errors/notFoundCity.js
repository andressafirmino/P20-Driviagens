export function notFoundCitiesError(count) {
    let message;
    if (count === "1") {
        message = "Uma cidade não encontrada.";
    } else if (count === "0") {
        message = "Nenhuma cidade encontrada.";
    } 
    return {
        type: "notFoundCities",
        message
    };
}