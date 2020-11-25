export {}
// <> // Angle Bracket sintax
let username: any;
username = 'manuelalvarez';

// Tenemos una cadena, TS confía en mí.
let message: string = (<string>username).length > 5 ?
                        `Wellcome ${username}` :
                        `Username is too short`;

console.log('message', message);


let usernameWithName : any = 'manuelalvarez 1';
// Cómo obtener el username ?
username = (<string>usernameWithName).substring(0,13);
console.log('username Only', username);

// Sintaxis 'as'
 message = (username as string).length > 5 ?
        `Wellcome ${username}` :
        `Username is too short`;

let  helloUser : any;
helloUser = 'Hello manuel';
username = (helloUser as string).substring(5);
console.log('username',username);
