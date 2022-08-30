export class UsuarioNivel {

    //Propiedades de UsuarioNivel
    idUsuario: any;
    idNivel: any;
    completado: any;
    id?: any;

    //creacion do constructor
    constructor(idUsuario: any, idNivel: string, completado: any) {
        this.idUsuario=idUsuario;
        this.idNivel=idNivel;
        this.completado=completado;
    }
}
