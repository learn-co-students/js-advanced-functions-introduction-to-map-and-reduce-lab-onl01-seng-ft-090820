 function mapToNegativize(array) {
    let negativeArray =  array.map(n => n*-1)
    return negativeArray
}

function mapToNoChange(originalArray) {
    return originalArray
}

function mapToDouble(array) {
    let doubledArray = array.map(n => n*2)
    return doubledArray
}

function mapToSquare(array) {
    let squaredArray = array.map(n => n**2)
    return squaredArray
}

function reduceToTotal(src, start = 0) { 
    let total = start
    for(let i = 0; i < src.length; i++) { 
        total = total + src[i] 
    }
    return total
}

function reduceToAllTrue(src) { 
    for(let i = 0; i < src.length; i++) { 
        if (!src[i]) {
            return false
        } 
    }
    return true
}
function reduceToAnyTrue(src) { 
    for(let i = 0; i < src.length; i++) { 
        if (src[i]) return true
    }
    return false
} 