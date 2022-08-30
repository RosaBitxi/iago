export class Monumento {

    //Propiedades de Monumento
    id?: number;
    nome: string;
    descripcion: string;
    coord: string;
    vision: string;
    imaxe: string;

    //creacion do constructor
    constructor(novoNome: string, novoDescrip: string, novoCoord: string, novoVision: string, novoImaxe: string) {
        this.nome=novoNome;
        this.descripcion=novoDescrip;
        this.coord=novoCoord;
        this.vision=novoVision;
        this.imaxe=novoImaxe;
    }
}
