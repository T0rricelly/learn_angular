import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  operOne!: number;
  operTwo!: number;
  @Output() result = new EventEmitter<number>();

  add(operOne:number, operTwo:number){
    this.result.emit(operOne + operTwo);
  }
}
