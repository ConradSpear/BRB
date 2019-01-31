import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./app.component.css']
})
export class ModalComponent {
  name = 'Alice';
  modalVisible = false;
  editedName = '';
  setModal(v: boolean) {
    this.modalVisible = v;
    this.editedName = this.name;
  }
  close() {
    this.modalVisible = false;
  }
  saveChanges() {
    this.modalVisible = false;
    this.name = this.editedName;
  }
}


