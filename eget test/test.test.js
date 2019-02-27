functions = require("./functions");

/* console.log(functions.addNumbers(3, 5)); */


test("2+2=4", () => {
    expect(functions.addNumbers(2, 2)).toEqual(4);
});