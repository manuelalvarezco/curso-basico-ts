"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Función para mostrar una fotografía
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ", date: " + picture.date + ", orientation: " + picture.orientation + "]");
}
var myPic = {
    title: 'Test Title',
    date: '20-04-20202',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test title 2',
    date: '22-22-2222',
    orientation: PhotoOrientation.Portrait,
});
function generatePicture(config) {
    var pic = { title: 'test', date: '2121-121-1212' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Traveñ Pic' });
console.log(picture);
var user;
user = {
    id: 10,
    username: 'manuelalvarez',
    isPro: true
};
console.log('user', user);
user.username = 'paparazzi';
// user.id = 22 // Error
console.log('user', user);
