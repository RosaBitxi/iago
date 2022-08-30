export class Nivel {

    //Propiedades de Nivel
    id?: number;
    mon1: string;
    mon2: string;
    mon3: string;
    dificultade: string;
    nome: string;

    //creacion do constructor
    constructor(novoMon1: string, novoMon2: string, novoMon3: string, novoDificultade: string, novoNome: string) {
        this.nome=novoNome;
        this.dificultade=novoDificultade;
        this.mon1=novoMon1;
        this.mon2=novoMon2;
        this.mon2=novoMon2;
    }
}
