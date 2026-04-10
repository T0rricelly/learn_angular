import { Component } from '@angular/core';
import { EjemploChild } from '../ejemplo-child/ejemplo-child';

@Component({
  selector: 'ejemplo-father',
  imports: [EjemploChild],
  templateUrl: './ejemplo-father.html',
  styleUrl: './ejemplo-father.css',
})
export class EjemploFather {
  text: string = 'Variable del padre'
  personDes: any =

    {
      name: 'Jose',
      age: 17
    }
}
