export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

export class User {
    private albums: Album[];
 
    public constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
         this.albums = [];
     }
 
     public addAlbum(album: Album){
         this.albums.push(album);
     }
}

export class Picture {
    // Propiedades
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }
}

export class Album {
    private id:number;
    private title: string;
    private pictures: Picture[];
 
    public constructor(id: number, title: string) {
         this.id = id;
         this.title = title;
         this.pictures = [];
     }
 
     public addPicture(picture: Picture){
         this.pictures.push(picture);
     }
 }