function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isAlive: true
    };
}

// const mathStuff = {
//     x: 200,
//     add: function (a, b) {
//         return a + b;
//     },
//     square: function (a) {
//         return a * a;
//     }
// }

const mathStuff = {
    x: 200,
    add(a, b) {
        return a + b
    },
    square(a) {
        return a * a;
    }
}

//COMPUTED PROPERTY NAMES
// 'periwinkle' '9c88ff'
// 'bright ube' 'D6A2E8'
const color = {
    periwinkle: '9c88ff',
    '9c88ff': 'periwinkle'
}

// function makeColor(name, hex) {
//     const color = {};
//     color[name] = hex,
//         color[hex] = name
//     return color;
// }

function makeColor(name, hex) {
    return {
        [name]: hex,
        [hex]: name
    };
}

const mystery = {
    [6 + 7]: 'thirteen'
}

const obj = {};
onj[6 + 7] = 'thirteen'