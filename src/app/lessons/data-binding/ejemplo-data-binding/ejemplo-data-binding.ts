import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ejemplo-data-binding',
  imports: [FormsModule],
  templateUrl: './ejemplo-data-binding.html',
  styleUrl: './ejemplo-data-binding.css',
})
export class EjemploDataBinding {
  userName: string = "Santiago"
  number: number = 0;

  addOne (){
    this.number++
  }
}
