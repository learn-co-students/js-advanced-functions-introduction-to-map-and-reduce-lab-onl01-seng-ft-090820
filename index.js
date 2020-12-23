// Your code here

function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach( x => newArray.push(-x) ) 
    return newArray
}

function mapToNoChange(sourceArray) {
    // let newArray = []
    // sourceArray.forEach( x => newArray.push(x) ) 
    // return newArray
    return sourceArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.forEach( x => newArray.push(2 * x) ) 
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach( x => newArray.push(x ** 2) ) 
    return newArray
}

function reduceToTotal(sourceArray, total = 0) {
    sourceArray.forEach( x => total += x ) 
    return total
}

function reduceToAllTrue(sourceArray) {
    let truthy = true 
    sourceArray.forEach( x => {
        if (x == false && truthy) {
            truthy = false
        }
    } )
    return truthy
}

function reduceToAnyTrue(sourceArray) {
    let truthy = false 
    sourceArray.forEach( x => {
        if (x == true && !truthy) {
            truthy = true
        }
    } )
    return truthy
}
