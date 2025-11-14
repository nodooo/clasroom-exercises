// exercise 1
const numbers = [7, 1, 3, 6, 16];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const average = sum / numbers.length;

console.log("sum:", sum);
console.log("average:", average);

// exercise 2
const iPhone = {
    productName: "iPhone 17 Pro Max",
    memory: "1TB",
    isAvailableAt: ["Iplus main office"]
};


console.log(iPhone.productName + " with " + iPhone.memory + " memory is available at " + iPhone.isAvailableAt + ".");


// exercise 3
const books = [{
        title: "soul of samurai",
        author: "author1",
        yearPublished: 2012
    },
    {
        title: "other book",
        author: "author2",
        yearPublished: 2013
    },
    {
        title: "other book 2",
        author: "author 3",
        yearPublished: 2015
    }
];

console.log(books);