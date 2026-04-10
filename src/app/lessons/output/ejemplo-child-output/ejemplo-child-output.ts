import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'ejemplo-child-output',
  imports: [FormsModule, SelectButtonModule, SelectModule],
  templateUrl: './ejemplo-child-output.html',
  styleUrl: './ejemplo-child-output.css',
})
export class EjemploChildOutput {

  userName: string = '';
  userSearch: string = '';
  selectRole: string = '';
  @Output() sendRole = new EventEmitter<string>();
  roles = [
    { label: 'Usuario', value: 'user' },
    { label: 'Administrador', value: 'admin' }
  ]
  
  notify(){
    this.sendRole.emit(this.selectRole)
  }
  
  setSearchUser() {
    this.userSearch = this.userName
  }

}
