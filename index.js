// Your code here

let mapToNegativize = (sourceArray) => sourceArray.map(arr => arr*-1)

let mapToNoChange = (sourceArray) => sourceArray.map(arr => arr)

let mapToDouble = (sourceArray) => sourceArray.map(arr => arr*2)

let mapToSquare = (sourceArray) => sourceArray.map(arr => arr**2)

function reduceToTotal(src, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++){
        total = total + src[i]
    }
    return total
}

function reduceToAllTrue(src){
    for (let i = 0; i < src.length; i++){
        if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src){
    for (let i = 0; i < src.length; i++) {
        if (src[i]) return true
    }
    return false
}