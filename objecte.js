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
obj[6 + 7] = 'thirteen'

//OE EXERCISES

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
//refactored:
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
//refactored:
// var favoriteNumber = 42;

// var instructor = {
//     firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// function favoriteColor(instructor, color, name) {
//     instructor[name];
//     name[instructor];
//     instructor[favoriteNumber] = "That is my favorite!"


// } my attempt

// solution code below

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Write an ES2015 Version

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }
// let instructor = {
//     [firstName] : "Colt",
//     sayHi: () =>("Hi!")
//     },
//     sayBye: function(){ < I got stuck here because I don't know how to use ES2015 with this.
//       return this.firstName + " says bye!";
//     }

//solution code
// const instructor = {
//     firstName: "Colt",
//     sayHi() {
//         return "Hi!";
//     },
//     sayBye() {
//         return this.firstName " says bye!";
//     }
// }

const createAnimal = (species, vb, noise) => {
    let animal = {
        species,
        vb,
        noise
    }
    return animal;
}