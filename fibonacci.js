function fibonacci (n) {
let suma =  0
    if(n == 0)
        return suma
    if(n <= 2){
        suma = 1
    }

    let prev1 = 1
    let prev2 = 1
    for(let i = 2; i < n ; i++) {
        suma = prev1 + prev2
        prev2 = prev1
        prev1 = suma
    }
    return suma
}

module.exports = {fibonacci}