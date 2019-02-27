function addNumbers(a, b) {
    return a + b;
}


function connectStrings(a, b) {
    return a + b
}

const functions = { connectStrings, addNumbers };

/* if (typeof module === "object")  */{ module.exports = functions; }