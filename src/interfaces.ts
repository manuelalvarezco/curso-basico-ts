export {};

// Función para mostrar una fotografía


enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}


function showPicture(picture:Picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
    
}

let myPic = {
    title: 'Test Title',
    date: '20-04-20202',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic);

showPicture({
    title: 'Test title 2',
    date: '22-22-2222',
    orientation:PhotoOrientation.Portrait,
    //extra: 0232 // Error
})

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture(config:PictureConfig) {
    const pic = {title:'test', date: '2121-121-1212'};

    if(config.title){
        pic.title = config.title
    }
    if(config.date){
        pic.date = config.date
    }

    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);

picture = generatePicture({title: 'Traveñ Pic'})
console.log(picture);

// Interfaz: Usuario
interface User {
    readonly id: number; // Solo lectura
    username: string;
    isPro: boolean;
}

let user: User;

user = {
    id: 10,
    username: 'manuelalvarez',
    isPro: true
}

console.log('user', user);

user.username = 'paparazzi'
// user.id = 22 // Error
console.log('user', user);
