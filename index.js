// Your code here
function mapToNegativize(array){
    return array.map(x => x * -1);
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    return array.map(x => x * 2);
}

function mapToSquare(array){
    return array.map(x => x ** 2);
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return sourceArray.reduce(reducer, startingPoint);
}

function reduceToAllTrue(sourceArray){
    const reducer = (accumulator, currentValue) => {  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
    const reducer = (accumulator, currentValue) => {  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false)
}