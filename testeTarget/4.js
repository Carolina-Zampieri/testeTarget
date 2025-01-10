let fEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

let fTotal = 0
let estado

for (estado in fEstado) {
    fTotal += fEstado[estado]
}