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