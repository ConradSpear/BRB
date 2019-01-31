import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { Frequency } from './frequency';
import { Connection } from './Connection';
import { currentConnections } from './currentConnectionsJSON'
import { ConnectionComponent } from './connection.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  name = '';
  editedName = '';
  modalVisible: boolean = false;
  overLay: boolean = false;
  connection: Connection; 
  
  connections: Array<Connection> = currentConnections;


  ngOnInit() {
    this.filterSelection("all")
  }

  

  toggleModal(){
    this.modalVisible = !this.modalVisible;    
    this.editedName = this.name;    
    var modal = document.getElementById('myModal');
    window.onclick = (event) => {
      if (event.target === modal) {        
        this.modalVisible = !this.modalVisible;        
     }
    }
  }

  filterSelection(c) {

    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("show");
      if (x[i].className.indexOf(c) > -1) {
        x[i].classList += " show";
      }
    }
  
    this.active();
  }
  
  // Add active class to the current button (highlight it)
  active() {
  
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
  
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("btn active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  toggleDropDownName(){
    var dd = document.getElementsByClassName("dropdown-menu");
      
}

onConnectionSave(c: Connection) {
  this.connections.push(c);
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
  new City(1, 'This Week'),
  new City(2, 'Sometime this month'),
  new City(3, 'Within 3 months'),
  new City(4, 'Within 6 months'),
  new City(5, 'Never') 
]

}
