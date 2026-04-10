import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'ejemplo-child-output',
  imports: [FormsModule, SelectButtonModule],
  templateUrl: './ejemplo-child-output.html',
  styleUrl: './ejemplo-child-output.css',
})
export class EjemploChildOutput {

  userName: string = '';
  userSearch: string = '';
  selectLevel: string = '';
  levels = [
    { label: 'Usuario', value: 'user' },
    { label: 'Administrador', value: 'admin' }
  ]

  setSearchUser() {
    this.userSearch = this.userName
    // console.warn(this.levels)
  }

}
