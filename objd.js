const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3,
    // brewTemp: 180

};

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

const {
    price,
    quantity,
    teaName,
    ...others
} = teaOrder;

const {
    origin
} = teaOrder;

const {
    brewTemp: temp = 175
} = teaOrder;

const {
    teaName: tea
} = teaOrder;

function checkOut(tea) {
    const {
        quantity = 1,
            price
    } = tea;
    return quantity * price;
}

checkOut(teaOrder)

const order1 = {
    variety: 'white',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,

    // brewTemp: 180

};

const students = [{
    name: 'Drake',
    gpa: 4.6
}, {
    name: 'Henriette',
    gpa: 4.4
}, {
    name: 'Tung',
    gpa: 4.0
}, {
    name: 'Harry',
    gpa: 3.8
}, {
    name: 'Ant',
    gpa: 3.2
}];

const [topStudent, secondBest, , fourthStudent] = students;
const fifth = students[4];
const [first, ...losers] = students;

const order2 = {
    variety: 'white',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    // quantity: 4
};

function getTotal({
    qty = 1,
    price
}) {
    return qty * price;
}

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold, silver, bronze]) {
    return {
        gold,
        silver,
        bronze
    }
}
//nested arrays mirror the object itself.
// You can rename as well. 
//Within arrays you can use commas to find positions too.

//SWAPPING VARS W DSTRUCTURE
let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';


// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both = [delicious, disgusting];

// [disgusting, delicious] = both;

[disgusting, delicious] = [delicious, disgusting];

//DESTRUCTURING EXERCISES


//What does the following code return/print?

let facts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846
};
let {
    numPlanets,
    yearNeptuneDiscovered
} = facts;

console.log(numPlanets); // ? returns 8
console.log(yearNeptuneDiscovered); // ? returns 1846

//What does the following code return/print?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {
    numPlanets,
    ...discoveryYears
} = planetFacts;

console.log(discoveryYears); // ?yearNeptuneDiscovered: 1846,
//yearMarsDiscovered: 1659

//What does the following code return/print?

function getUserData({
    firstName,
    favoriteColor = "green"
}) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({
    firstName: "Alejandro",
    favoriteColor: "purple"
}) // ? Your first name is Alejandro and you like purple.
getUserData({
    firstName: "Melissa"
}) // ? Your first name is Melissa and you like green
getUserData({}) // ? Your first name is undefined and you like green

//refactor into ES15 var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };

//   var a = obj.numbers.a;
//   var b = obj.numbers.b;
// let obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     }
// };

// let a = {
//     {
//         a
//     }
// }
// let b = {
//     {
//         , b
//     }
// } my attempt

//solution code follows
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {
    a,
    b
} = obj.numbers

//What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? "Maya"
console.log(second); // ?"Marisa"
console.log(third); // ?"Chi"
//What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // ? raindrops on roses
console.log(whiskers); // ? whiskers on kitten
console.log(aFewOfMyFavoriteThings); // ?"Bright copper kettles",
//"warm woolen mittens",
// "Brown paper packages tied up with strings"
//What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?[10,30,20]
//refactor ES2015
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;


let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// function raceResults = arr => ({
//     first,
//     second,
//     third,
//     ...rest
// }); my attempt, solution code follows
const raceResults = ([first, second, third, ...rest]) => ({
    first,
    second,
    third,
    rest
})