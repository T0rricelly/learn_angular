import { Component, input } from '@angular/core';

@Component({
  selector: 'ejemplo-child-signal',
  imports: [],
  templateUrl: './ejemplo-child-signal.html',
  styleUrl: './ejemplo-child-signal.css',
})
export class EjemploChildSignal {
  msg = input<string>('');

  
  person = input<any>();
}
