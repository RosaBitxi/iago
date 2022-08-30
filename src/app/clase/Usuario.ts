export class Usuario {

    //Propiedades de Usuario
    id?: number | string | null;
    alias: string;
    passwd: string;
    doblePasswd: string;
    email: string;
    animal: string;
    puntuacion?: number;

    //creacion do constructor
    constructor(novoAlias: string, novoPasswd: string, novoDoblePasswd: string, novoEmail: string, novoAnimal: string) {
        this.alias = novoAlias;
        this.passwd = novoPasswd;
        this.doblePasswd = novoDoblePasswd;
        this.email = novoEmail;
        this.animal = novoAnimal;
    }

}