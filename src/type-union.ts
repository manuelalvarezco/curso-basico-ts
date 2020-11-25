export {};

// userId 10, '10'
let userId : number | string;

userId = 10;
userId = '10';

// Buscar username dado un id
function getUserNameById(id: number | string) {
    // Lógica
    return 'manuelalvarezco'
}

getUserNameById(1);
getUserNameById('1');

// Alias de tipo : TS
type IdUSer =  number | string;
type UserName = string;
let idUser: IdUSer;
idUser = 10;
idUser = '10';

// Buscar username dado un id
function getUserId(idUser: IdUSer): UserName {
    // Lógica
    return 'manuelalvarezco'
}

getUserId(1);
getUserId('1');

// Tipos literales
// Reglas 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';

// let smallPicture : SquareSize = '3333x3333' // Error
let smallPicture : SquareSize = '100x100';
let mediumPicture : SquareSize = '500x500';

