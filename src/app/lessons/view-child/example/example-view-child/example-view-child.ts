import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example-view-child',
  imports: [],
  templateUrl: './example-view-child.html',
  styleUrl: './example-view-child.css',
})
export class ExampleViewChild {
  @ViewChild('inputText') inputElement!: ElementRef;

  clean(){
    console.log(this.inputElement.nativeElement.value)
    this.inputElement.nativeElement.value = ''
  }
}
