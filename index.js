// Your code here

const mapToNegativize = (sourceArray) => sourceArray.map(arr => arr*-1)

const mapToNoChange = (sourceArray) => sourceArray.map(arr => arr)

const mapToDouble = (sourceArray) => sourceArray.map(arr => arr*2)

const mapToSquare = (sourceArray) => sourceArray.map(arr => arr**2)

// Reducer

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }