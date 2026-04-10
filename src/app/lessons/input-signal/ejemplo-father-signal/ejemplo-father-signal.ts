import { Component} from '@angular/core';
import { EjemploChildSignal } from '../ejemplo-child-signal/ejemplo-child-signal';

@Component({
  selector: 'ejemplo-father-signal',
  imports: [EjemploChildSignal],
  templateUrl: './ejemplo-father-signal.html',
  styleUrl: './ejemplo-father-signal.css',
})
export class EjemploFatherSignal {
  msg: string = ''   
  person: any = {
    id: 1,
    name: 'Santiago'
  }
}
