export function dateFormatError() {
    return {
        type: "formatDate",
        message: `O formato da data deve ser: "DD-MM-YYYY"`
    }
}