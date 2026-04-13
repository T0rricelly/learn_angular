import { Component } from '@angular/core';
import { CalService } from '../../../services/cal-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator-example',
  imports: [FormsModule],
  templateUrl: './calculator-example.html',
  styleUrl: './calculator-example.css',
})
export class CalculatorExample {
  operOne!: number;
  operTwo!: number;
  result!: number;
  // historyList: number[];
  show: boolean = false;
  
  constructor(private calService: CalService) {
  }

  get historyList(){
    return this.calService.history
  }
  sumar(){
    if(this.operOne === undefined || this.operTwo === undefined){
      alert('Por favor completa los campos')
      return;
    }
    this.result = this.calService.add(this.operOne, this.operTwo)
  }
  cleanHistory(){
    this.calService.clearHistory()
  }

}
