import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  imports: [],
  templateUrl: './view-child-child.html',
  styleUrl: './view-child-child.css',
})
export class ViewChildChild {
  @ViewChild('input') input!: ElementRef;

  clean(){
    console.log(this.input.nativeElement.value)
    this.input.nativeElement.value = ''

  }
}
