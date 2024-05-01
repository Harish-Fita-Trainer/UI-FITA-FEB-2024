export const Increment = function () {
    return {
        type: "increment"
    }
}


export const IncrementExplicit = function (Count) {
    return {
        type: "incrementexplicit",
        payload: Count
    }
}


const Decrement = function () {
    return {
        type: "decrementexplicit"
    }
}


const DecrementExplicit = function () {
    return {
        type: "decrement"
    }
}