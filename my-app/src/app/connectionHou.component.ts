import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Connection } from './connection';
@Component({
    selector: 'app-hou-connection',
    templateUrl: './connectionHou.component.html',
    styleUrls: ['./app.component.css']
})

export class ConnectionHouComponent {
    constructor() { }

    @Input() connection: Connection = { name: "", email: "", notes: "", office: "", frequency: "" };
    @Output() selected: EventEmitter<Connection> = new EventEmitter();

    select() {
        this.selected.emit(this.connection);
    }
}