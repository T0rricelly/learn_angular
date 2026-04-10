import { Component, Input } from '@angular/core';

@Component({
  selector: 'ejemplo-child',
  imports: [],
  templateUrl: './ejemplo-child.html',
  styleUrl: './ejemplo-child.css',
})
export class EjemploChild {
  @Input()
  msg: string = '';
  @Input()
  txt: string = ''
  @Input()
  person: any;
}
