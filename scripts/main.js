function add(x, y) {
    return x + y
}
console.log(add(3, 9))
 
 

function multiply(x, y) {
    let z = 0
    for (let index = 0; index < y; index += 1){  
        z = add(x, z)
    }
    return z
}
console.log(multiply(5,3))



function power(x, n) {
    let z = 1
    for (let index = 0; index < n; index += 1){
        z = multiply(x, z)
    }
    return z
}
console.log(power(3, 3))


function factorial (x) {
    let z = 1
    for (let index = x; index > 1; index -= 1){
        z = multiply(z, index)
    }
    return z
}
console.log(factorial(5))






// bonus

// function Fibonacci(x) {
//     let z = [array]
//     for (let index = 0; index < 0;  )

// }