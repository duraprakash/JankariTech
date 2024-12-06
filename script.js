// Array destructuring
const [a, b, c = 10] = [1,2];
console.log(a,b,c);

const user = {fname: 'Alice', age: 25};
const {fname, age} = user;
console.log(fname, age);

const newUser = {firstName: 'Bob', lastName: 'Smith'};
const {firstName: fName, lastName: lName} = newUser;
console.log(fName,lName);

const firstUser = {
    first: 'Laxmi',
    last: 'Gurung'
};
const {first:laxmi, last:grg} = firstUser;
console.log(laxmi,grg);
console.log(`My name is ${laxmi} ${grg}`);

// Nested destructuring
const place = {placeName: 'Pokhara', code: '33700', tole: {toleName:'Janapriya tole', ward: '10'}};
const {placeName, code, tole: {toleName, ward}} = place;
console.log(placeName,toleName, ward);

