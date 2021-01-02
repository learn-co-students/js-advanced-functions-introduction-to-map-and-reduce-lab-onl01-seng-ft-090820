// Your code here

function mapToNegativize(array) {
    let newArray1 = array.map(x => x * -1)
    return newArray1;
}

function mapToNoChange(array) {
    let newArray2 = array.map(x => x);
    return newArray2;
}

function mapToDouble(array) {
    let newArray3 = array.map(x => x * 2);
    return newArray3;
}

function mapToSquare(array) {
    let newArray4 = array.map(x => x ** 2);
    return newArray4;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
       if (!sourceArray[i]) {
           return false;
       }
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            return true;
        }
    }
    return false;
}