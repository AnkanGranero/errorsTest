
const functions = require("./errors.js");

test("Adds 2 + 2 to equal 4", () => {
    expect(2 + 2).toBe(4);
});

test("Adds 2 + 5 to not be 6", () => {
    expect(2 + 5).not.toBe(6);
})

test("Adds 0.2 + 0.1 to be close to 0.3", () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3)
});

const obj1 = { name: "test", data: [1, 2, 3] };
const obj2 = obj1;
test("Test for obj1 to equal obj2", () => {
    expect(obj1).toBe(obj2);
});


const obj3 = { name: "test", data: [1, 2, 3] };
const obj4 = { name: "test", data: [1, 2, 3] };
test("Test for obj1 to equal obj2", () => {
    expect(obj3).toEqual(obj4);
});


describe('my empty list', () => {

    test('is empty', () => {
        expect(functions.emptyList()).toEqual([]);
    });
    test('length is zero', () => {
        expect(functions.emptyList()).toHaveLength(0)
    });
    test("shall not return an empty string", () => {
        expect(functions.emptyList()).not.toEqual("");//kanske gjort fel här
    })


});

describe("totalProductCost", () => {

    test("An empty list will be zero", () => {
        let products = [];
        expect(functions.totalProductCost(products)).toBe(0);
    });
    test("Will return 15 on an item that cost 15", () => {
        let products = [{ name: "banan", price: 15 }];
        expect(functions.totalProductCost(products)).toBe(15);
    });
    test(" three items with price 15,10 and 30 will return 55", () => {
        let products = [{ name: "banan", price: 15 },
        { name: "mango", price: 10 },
        { name: "skaladkiwi", price: 30 }];
        expect(functions.totalProductCost(products)).toBe(55);
    });


});

describe("add an Item", () => {

    test("Will return an object equal to the object added", () => {
        let products = [];
        let product = { name: "banana", price: 15 };
        expect(functions.addProduct(products, product)).toEqual([product]);

    })
    test("Will correctly add an object to an array with two objects", () => {
        let products = [{ name: "cucumber", price: 15 },
        {
            name: "devilsfruit", price: 5000
        }]
        let product = { name: "banana", price: 15 };
        ThreeProducts = [...products, product];

        expect(functions.addProduct(products, product)).toHaveLength(3);

        expect(functions.addProduct(products, product)).toEqual(ThreeProducts);

        expect(functions.addProduct(products, product)).toEqual([{ name: "cucumber", price: 15 },
        {
            name: "devilsfruit", price: 5000
        }, { name: "banana", price: 15 }]);



    })

});

describe("Check average price", () => {
    test('see if we get 60 back from two products that cost 80 and 40', () => {
        products = [{ name: "mango", price: 80 }, { name: "korv med bröd", price: 40 }]
        expect(functions.averageProductPrice(products)).toEqual(60);
    }
    )
})

let x = "x";