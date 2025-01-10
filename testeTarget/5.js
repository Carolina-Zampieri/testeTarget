function inverter(str) {
    let inv = ''
    let x

    for (x = str.length - 1; x >= 0; x--) {
        inv += str[x]
    }
    return inv
}