// Your code here

function mapToNegativize(sourceArray) {
    let r = []
    sourceArray.forEach(element => {
        r.push(element * -1)
    })
    return r
}

function mapToNoChange(sourceArray) { 
    let r = []
    sourceArray.forEach(element => {
        r.push(element)
    })
    return r
}

function mapToDouble(sourceArray) { 
    let r = []
    sourceArray.forEach(element => {
        r.push(element * 2)
    })
    return r
}

function mapToSquare(sourceArray) { 
    let r = []
    sourceArray.forEach(element => {
        r.push(element ** 2)
    })
    return r
}

function reduceToTotal(sourceArray, startingPoint=0) { 
    let total = startingPoint
    for(let i = 0; i < sourceArray.length; i++) { 
        total = total + sourceArray[i] 
    }
    return total
}

function reduceToAllTrue(sourceArray) { 
    for(let i = 0; i < sourceArray.length; i++) { 
        if (!sourceArray[i]) {
            return false
        } 
    }
    return true
}
function reduceToAnyTrue(sourceArray) { 
    let x 
    for(let i = 0; i < sourceArray.length; i++) { 
        if (sourceArray[i]) {
            x = true 
        } else {
            x =false
        }
    }
    return x
}