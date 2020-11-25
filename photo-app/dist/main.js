"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'manuel', 'Luis', true);
var album = new photo_app_1.Album(1, 'Test Album');
var picture = new photo_app_1.Picture(3, 'Picture test', photo_app_1.PhotoOrientation.Landscape);
// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
