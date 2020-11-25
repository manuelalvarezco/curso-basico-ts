import { User, Album, Picture, PhotoOrientation } from './photo-app';


const user = new User(1, 'manuel', 'Luis', true);
const album = new Album(1, 'Test Album');
const picture = new Picture(3, 'Picture test',PhotoOrientation.Landscape);

// Creamos relaciones entre objetos

user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);
