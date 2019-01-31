import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
})

export class ConnectionComponent {
    constructor() {}
    @Input() name = '';
  //  @Input() email = 'katie.lutz@pv.com'
}