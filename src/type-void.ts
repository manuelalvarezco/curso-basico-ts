// Void

// Tipo explícito
function showInfo(user:any): any {
    console.log('user Info', user.id, user.username, user.firstName);
    //return 'hello';
}

showInfo({id:1, username:'manuelalvarez', firstName:'Luis'})

// Tipo inferido
function showFormatedInfo(user:any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
    
}

showFormatedInfo({id:1, username:'manuelalvarez', firstName:'Luis'});

// Tipo void como tipo de dato
let unusuable: void;
// unusuable = null; //Error


// Tipo Never
function handleError(code:number, message:string): never {
    
    // Process your code here
    //Generate a message
    throw new Error(`${message}, Code: ${code}`)
}

try {
    handleError(404, 'Not Found');
} catch (error) {
    
}


