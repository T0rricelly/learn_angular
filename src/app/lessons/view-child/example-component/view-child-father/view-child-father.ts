import { Component, ViewChild } from '@angular/core';
import { ViewChildChild } from "../view-child-child/view-child-child";

@Component({
  selector: 'app-view-child-father',
  imports: [ViewChildChild],
  templateUrl: './view-child-father.html',
  styleUrl: './view-child-father.css',
})
export class ViewChildFather {
  @ViewChild(ViewChildChild) componentChild!: ViewChildChild;

  cleanInput(){
    this.componentChild.clean();
  }
}
