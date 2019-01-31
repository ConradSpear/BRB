
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Connection } from './connection';
@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./app.component.css']
})

export class ConnectionComponent {
    constructor() {}
    @Input() name = '';
    @Input() email = '';
    @Input() notes = '';
    @Input() connection: Connection = {name:"", email: "", notes: "", office: "", frequency: ""};
    @Output() toggleModal: EventEmitter<any> = new EventEmitter();
    

    toggle() {
        this.toggleModal.emit();
      }
}