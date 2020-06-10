// function min(...nums){

// }

// [...nums]

// {...nums}

// const max = () => {
//     console.log(arguments);
// }

// function sum() {
//     const args = Array.from(arguments);
//     return args.reduce((sum, val) => {
//         return sum + val;
//     });
// }

const max = function () {
    args = Array.from(arguments);
    return args.reduce((max, cur) => {
        return cur > max ? cur : max;
    });
}

function sum(...nums) {
    return nums.reduce((sum, n) => sum + n)
}

const sumAll = (...values) => {
    if (!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
}

function makeFamily(parent1, parent2, ...kids) {
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    };
}

const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type)
}

// max(...something)
// [...something]
// {...asd}

Math.max()

const nums = [4, 5, 88, 123, 0.92, 34]

const things = [23, 45, true, false, 0, 'hello', 'goodbye', undefined];

filterByType('string', ...things)

console.log(...'hello')

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// const paletteCopy = palette; does not make copy-- points to same array

// // const paletteCopy = palette.slice(); can make a copy with slice
// const paletteCopy = ['sky blue', ...palette, 'grass green'];

const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallowroot'];
const coffees = ['guatemala red cat', 'snow leopard blend'];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];

const caffeinated = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey'];

const vowels = 'aeiou';
const vowelArr = [...vowels]

const tea = {
    type: 'oolong',
    name: 'winter sprout',
    origin: 'taiwan'
};

// const arr = [...tea]; objects are not iterable

// const tea2 = {
//     ...tea
// };

//tea !=== tea2 --unique references

const teaTin = {
    ...tea,
    price: 22.99
};

// const newTea = {
//     ...tea,
//     name: 'golden frost'
// };
const newTea = {

    name: 'golden frost', //this property is overwritten when it's writting in this order
    ...tea
};

const teaData = {
    steepTime: '30s',
    brewTemp: 175,
    origin: 'japan'
}

const fullTea = {
    ...tea,
    ...teaData,
    origin: 'china'
};

// const color = ['red', 'orange']
// const dummyObj = {
//     ...color
// } should't spread an arr or str into an obj because it uses indices so you get a weird obj

const shoppingCart = [{
        name: 'honey orchid',
        quantity: 2,
        price: 13.5
    },
    {
        name: 'african solstice',
        quantity: 4,
        price: 25.99
    }
]
const cartCopy = [...shoppingCart];

//creating deep clones needs libraries

//REST/SPREAD OPERATOR EXERCISES

// filterOutOdds = () => {
//     let nums = (...prototype);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// } my attempt


const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)
//^solution code


// const max = () => {

//     return (...max) => {
//         return cur > min ? cur : min;
//     };
// } my attempt

const findMin = (...args) => Math.min(...args);
//solution code

const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});
//^solution code

// const doubleAndReturnArgs = (arr, ...args) => {
// return newArr = newArr.push(arr, ...args)
// } my attempt

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]
//solution code ^, spreads the array and other args and maps them to a new array doubled
//my attempts at Slice and Dice follow
/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     let randomNum = Math.floor(Math.random(items.length));
// return (...items.splice(randomNum))
// } my attempt
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {
        ...obj
    }
    newObj[key] = val;
    return newObj;
}
//used solution code

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = [...obj];
    return newObj.slice(obj[key]);
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}