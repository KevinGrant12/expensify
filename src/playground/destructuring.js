// Destructuring allows tearing apart of objects into new variables

const person = {
  name: 'Insidion',
  classes: {
    class1: "demon"
  },
  age: 343,
  location: {
    town: "Alvskrao",
    realm: "Forbidden",
    temp: -40,
    pop: 4732,
    murders: 3049
  }
};


// const name = person.name;
// const age = person.age;
const { name, age } = person;
console.log(`${name} is ${age} realm years old.`);

// const { town, temp } = person.location
// if (town && temp) {
//   console.log(`It's ${temp} in ${town}`);
// };

// Renaming destructured variables
const { town, pop: population, murders } = person.location
if ( population && murders) {
  console.log(`${town} currently has ${population} prisoners...${murders} of which who have been murdered.`);
}

// Setting up a default value
const { class1, class2 = "vermon" } = person.classes;
if ( class1 && class2 ){
  console.log(`${name} is a ${class1} who hails from the ${class2} family.`);
}

// Array destructuring
const address = ['4540 S Rural Road', 'Tempe', 'Arizona'];
console.log(`You are in ${address[1]} ${address[2]}.`);

// Array destructuring matches items by position
// Use comma to skip first item
// In this example, zip is falling back on default
const [, city, state, zip = '85282'] = address;
console.log(`You are in ${city} ${state} where the zipcode is ${zip}.`);

const item = ['coffee (hot)', '$2.00', '$2.50'];
const [ hotCoffee, , medium, large = "$2.75" ] = item;
console.log(`A medium ${hotCoffee} costs ${medium}, while a large coffee is ${large}.`);












