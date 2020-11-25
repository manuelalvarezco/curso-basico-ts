export {};
// Crear una fotografía
/*
function createPicture(title, date, size) {
    // title
}

*/
// Usamos TS con tipos

type SquareSise = '100x100' | '500x500' | '1000x1000';

function createPicture(title:string, date:string, size:SquareSise) {
    // Se crea la fotgrafía
    console.log('create picture ', title, date, size);
}

//createPicture('My Birthday','2020202','500x500');


// Parámetros opcionales en una función
function createPictur(title?:string, date?:string, size?:SquareSise) {
    // Se crea la fotgrafía
    console.log('create picture ', title, date, size);
}

createPictur('My Birthday','2020202','500x500');

createPictur('My Birthday','2020202');

let createPic = (title:string, date:string, size:SquareSise): object => { return { title, date, size }}

const picture = createPic('name', 'date', '100x100');
console.log(picture);

// Tipo de retorno TS

function handleError(code:number, message:string): never | string {
    // Procesamiento code or message
    if(message === 'error'){
        throw new Error(`${message}. Code error: ${code}`);
    }
    else{
        return 'An error has occurred';
    }
}


try {
    let result = handleError(200,'OK'); // string
    console.log('result', result);
    
    result = handleError(404, 'error'); // never
    console.log('result', result);
} catch (error) {
    
}
