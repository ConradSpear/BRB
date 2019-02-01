import { Component, Input, Output, EventEmitter } from '@angular/core';
import { currentConnections} from './currentConnectionsJSON';
import { Connection } from './connection';
import {NgForm} from '@angular/forms';
import { City } from './city';
import { Frequency } from './frequency';
import { connectionData } from './connectionData';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./app.component.css']
})
export class ModalComponent {
  constructor(){}
  
  @Input() connectionName;
  @Input() connectionEmail;
  @Input() connectionNotes;
  @Input() connectionOffice;
  @Input() connectionFreq;

  @Input() modalVisible ;  
  
  @Input() connections: Array<Connection>;
  @Output() toggleModal: EventEmitter<any> = new EventEmitter();
  @Output() connectionSave = new EventEmitter<Connection>();
  
  //connectionName: string = name;
  

  toggle() {
    this.toggleModal.emit();
  }
  
  onDelete(c: Connection) {
    const index = this.connections.indexOf(c);
    this.connections.splice(index, 1);
    this.toggle();
  }

  onSave() {
    this.connectionSave.emit({name: this.connectionName, email: this.connectionEmail, notes: this.connectionNotes, office: this.connectionOffice, frequency: this.connectionFreq});
    this.toggle();
  }

  cities = [
    new City(1, 'Atlanta'),
    new City(2, 'Chicago'),
    new City(3, 'Dallas'),
    new City(4, 'Houston'),
    new City(5, 'Los Angeles'),
    new City(6, 'New York'),
    new City(7, 'Philadelphia'),
    new City(8, 'San Francisco'),
    new City(9, 'Seattle'),
    new City(10, 'Washington D.C.')
  ]

  frequencies = [
    new Frequency(1, 'This Week'),
    new Frequency(2, 'Sometime this month'),
    new Frequency(3, 'Within 3 months'),
    new Frequency(4, 'Within 6 months'),
    new Frequency(5, 'Never')
  ]
}


