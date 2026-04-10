import { Component } from '@angular/core';
import { EjemploChildOutput } from '../ejemplo-child-output/ejemplo-child-output';

@Component({
  selector: 'ejemplo-father-output',
  imports: [EjemploChildOutput],
  templateUrl: './ejemplo-father-output.html',
  styleUrl: './ejemplo-father-output.css',
})
export class EjemploFatherOutput {
  userName: string = ''

}
