function mapToNegativize(sourceArray){
    return sourceArray.map(elem => elem * -1 )
}
// function mapToNegativize(sourceArray){
//     let newArray = []
//     sourceArray.forEach( elem => {
//         newArray.push(elem * -1)
//     })
//     return newArray
// }

function mapToNoChange(sourceArray){
    return sourceArray.map( elem => elem)
}

function mapToDouble(sourceArray){
    return sourceArray.map( elem => elem * 2 )
}

function mapToSquare(sourceArray){
    return sourceArray.map( elem => elem ** 2 )
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((total, elem) => {
        return elem + total
    }, startingPoint)
}

function reduceToAllTrue(sourceArray){
    const bln = (accum, currValue) => {
        if (!!accum === true && !!currValue === true){
            return true
        } else {
            return false
        }
    }
    return sourceArray.reduce(bln, true)
}

function reduceToAnyTrue(sourceArray){
    const bln = (accum, currValue) => {
        if (accum === true){
            return true
        } else {
            return !!currValue
        }
    }
    return sourceArray.reduce(bln, false)
}