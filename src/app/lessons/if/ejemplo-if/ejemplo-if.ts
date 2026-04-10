import { Component } from '@angular/core';

@Component({
  selector: 'ejemplo-if',
  imports: [],
  templateUrl: './ejemplo-if.html',
  styleUrl: './ejemplo-if.css',
})
export class EjemploIf {
  condition: boolean = false;
  conditionTwo: string = "hola"
}
