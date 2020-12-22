function mapToNegativize(arr) {
    let newArr1 = arr.map(x => x * -1)
    return newArr1;
}

function mapToNoChange(arr) {
    let newArr2 = arr.map(x => x);
    return newArr2;
}

function mapToDouble(arr) {
    let newArr3 = arr.map(x => x * 2);
    return newArr3;
}

function mapToSquare(arr) {
    let newArr4 = arr.map(x => x ** 2);
    return newArr4;
}

function reduceToTotal(srcArr, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < srcArr.length; i++) {
        total = total + srcArr[i]
    }
    return total;
}

function reduceToAllTrue(srcArr) {
    for (let i = 0; i < srcArr.length; i++) {
       if (!srcArr[i]) {
           return false;
       }
    }
    return true;
}

function reduceToAnyTrue(srcArr) {
    for (let i = 0; i < srcArr.length; i++) {
        if (!!srcArr[i]) {
            return true;
        }
    }
    return false;
}