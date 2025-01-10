x = 100

function fibonacci(x) {
    let a = 0
    let b = 1

    while (a < x) {
        let temp = a
        a = b
        b = temp + b
    }
    return a === x
}