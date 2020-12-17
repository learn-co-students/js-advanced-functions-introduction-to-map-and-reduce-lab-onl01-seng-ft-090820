// Your code here

const mapToNegativize = function(arr){
    const newArr = []
    for(const element of arr){
        newArr.push(-1*element)
    }
    return newArr
}

const mapToNoChange = function(arr){
    return arr
}

const mapToDouble = function(arr){
    const newArr = []
    for(const element of arr){
        newArr.push(2*element)
    }
    return newArr 
}

const mapToSquare = function(arr){
    const newArr = []
    for(const element of arr){
        newArr.push(element**2)
    }
    return newArr 
}

const reduceToTotal = function(source, start = 0){
    let total = start
    for(const element of source){
        total = element + total
    }
    return total
}

const reduceToAllTrue = function(arr){
    for (const element of arr){
        if (!element){
            return false
        }
    }
    return true
}

const reduceToAnyTrue = function(arr){
    for (const element of arr){
        if (element){
            return true
        }
    }
    return false
}