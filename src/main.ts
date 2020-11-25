console.log('Hello main');


//Number
// Explícito

let phone : number;
phone = 1;
// phone = '222'

let phoneNumber = 3232323;

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal : number = 0o744;

//Tipo : Boolean
// Tipado explícito

let isPro: boolean;
isPro = true;

// Strings
let username: string = 'manuelalvarez';
username = "luis";
// username = true;

// Template String
// Uso de back-tick ``

let userInfo: String;
userInfo = `
    User Info:
    username: ${username}
    firstname: ${username + 'Alvarez'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);
