
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./app.component.css']
})

export class ConnectionComponent {
    constructor() {}
    @Input() name = '';
  //  @Input() email = 'katie.lutz@pv.com'
}