import { Component, Input, Output, EventEmitter } from '@angular/core';
import { currentConnections} from './currentConnectionsJSON';
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
  @Input() modalVisible ;  
  @Input() connection: Connection = {name:"", email: "", notes: "", office: "", frequency: ""};
  connections: Array<Connection> = currentConnections;
  @Output() toggleModal: EventEmitter<any> = new EventEmitter();
  @Output() connectionSave = new EventEmitter<Connection>();

  toggle() {
    this.toggleModal.emit();
  }
  
  onDelete(c: Connection) {
    const index = this.connections.indexOf(c);
    this.connections.splice(index, 1);
  }

  onSave() {
    this.connectionSave.emit(this.connection);
  }
}


