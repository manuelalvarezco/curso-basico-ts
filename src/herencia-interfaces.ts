export {};

enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Square = 2,
    Panorama = 3
}

// Herencia 

interface Entity {
    id: number;
    title: string;
}
interface Album extends Entity {
    description: string;
}

interface Picture extends Entity {
    orientation: PhotoOrientation
}

const album: Album = {
    id: 10,
    title: 'Meetups',
    description: 'Community events around the world'
}

const picture: Picture = {
    id: 11,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';


console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);

