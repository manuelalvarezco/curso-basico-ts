// Tipo explícito
let users: string[];

users = [
    'manuelalvarez', 'paparrazi', 'losquelen'
];

// users = [1, true, 'test']; // Error

// Tipos inferidos
let otherUser = ['manuelalvarez', 'paparrazi', 'losquelen'];
// otherUser = [1, true, 'test']; // Error

// Array<TIPO>
let pictureTitles: Array<string>;

pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediento a los valores
console.log('firstUser', users[0]);
console.log('firstTitle', pictureTitles[0]);


// Propiedades en Array
console.log('users.length', users.length);


// Uso de funciones en Arrays
users.push('PlatziUser');
users.sort();

console.log('users', users);

