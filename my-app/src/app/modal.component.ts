import { Component, Input, Output, EventEmitter } from '@angular/core';
import { connectionData } from './connectionData';
import { Connection } from './connection';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./app.component.css']
})
export class ModalComponent {
  constructor(){}
  @Input() name = '';
  @Input() email = '';
  @Input() notes = '';
  @Input() modalVisible;
  connection: Array<Connection> = connectionData;
  @Output() toggleModal: EventEmitter<any> = new EventEmitter();
  @Output() connectionSave = new EventEmitter<Connection>();

  toggle() {
    this.toggleModal.emit();
  }
  
  onDelete(c: Connection) {
    const index = this.connection.indexOf(c);
    this.connection.splice(index, 1);
  }

  onSave() {
    this.connectionSave.emit(
        { name: this.name, email: this.email, notes: this.notes, office: '', frequency: '' }
    );
}
}


