// const arr = [1, 2, 3]
// const obj = {};
// //no literal syntax like this for maps^
// const myMap = new Map();

// myMap.set('7', 'seven string');

// const empty = [];
// myMap.set(empty, 'empty array')
// myMap.set(true, "true")
// myMap.get('7')

//we create an empty map using newMap, set/get key/vals using set/get, can use any type of data

const add = (x, y) => x + y;
const mult = (x, y) => x * y;


const funcCalls = new Map();

funcCalls.set(add, 0);
funcCalls.set(mult, 9);

// const bandData = [
//     [3, '3 Doors Down'],
//     ['three', 'Three Dog Night'],
//     ['nine', 'Nine Inch Nails'],
//     ['four', 'The Four Seasons'],
//     [41, 'Sum 41']
// ];

// const bandMap = new Map(bandData);

// bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');

// //maps are ordered

// bandMap.forEach((key, val) => {
//     console.log(key + '=>' + val)
// });

// for (let [key, value] of bandMap) {
//     console.log(key, '=', value);
// }
//SETS


const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

bannedHashTags.add('bestlife').add('selfie')

function filterHashTags(tags) {
    const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

    return tags.filter((tag) => !bannedHashTags.has(tag))
}

// const susansTags = ['happymonday', 'yolo', 'winning', 'sunset'];
// const ages = [45, 42, 21, 23, 24, 98, 4, 4]

// [ ... new Set(ages)];

//_______________________
//MAP AND SET EXERCISES
//_______________________
//QQ 1,2,3,4
//QQ "ref"
//QQ [1,2,3], false //my attempt
/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/ //^solution

function hasDuplicate(arr) {
    if ([...new Set(arr)] === arr) {

    }
    return true;
}

//my attempte