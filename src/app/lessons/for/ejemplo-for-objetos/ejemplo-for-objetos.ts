import { Component } from '@angular/core';

@Component({
  selector: 'ejemplo-for-objetos',
  imports: [],
  templateUrl: './ejemplo-for-objetos.html',
  styleUrl: './ejemplo-for-objetos.css',
})
export class EjemploForObjetos {
  animals: any = [
    {
      id: 1,
      name: "perro"
    },
    {
      id: 2,
      name: "gato"
    },
    {
      id: 3,
      name: "raton"
    }
  ]
}
