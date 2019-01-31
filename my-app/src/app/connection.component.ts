
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { currentConnections } from './currentConnectionsJSON';
import { Connection } from './connection';
@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./app.component.css']
})

export class ConnectionComponent {
    constructor() { }

    @Input() connection: Connection = { name: "", email: "", notes: "", office: "", frequency: "" };
    @Output() selected: EventEmitter<Connection> = new EventEmitter();

    select() {
        this.selected.emit(this.connection);
    }
}