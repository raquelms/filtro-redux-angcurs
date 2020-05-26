

export class Todo {
    public id : Number;
    public texto: string;
    public estado: boolean;

    constructor(texto: string){
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.estado = false;
        this.id = Math.random();
    }
}