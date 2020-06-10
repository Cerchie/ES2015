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

const color = ['red', 'orange']
const dummyObj = {
    ...color
}