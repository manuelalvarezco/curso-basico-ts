// Type object
let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'manuelalvarezco',
    firstName: 'Manuel',
    isPro: true
}

console.log('user', user);
// console.log('username', user.username); // Error

// Object vs object (Clase JS vs Tipo TS)
const myObj = {
    id: 1,
    username: 'manuelalvarezco',
    firstName: 'Manuel',
    isPro: true
}

const isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log('username', myObj.username);
