import { Component } from '@angular/core';

@Component({
    selector: 'micomponente',
    templateUrl: 'micomponente.component.html',
    styleUrls: ['micomponente.component.css']
})

export class Micomponente {
    public titulo:string;
    public comentario:string;
    public year:number;

    constructor() {
        this.titulo = 'Hola mundo! Soy "micomponente"';
        this.comentario = 'Este es mi primer componente';
        this.year = 2021;
    }
}