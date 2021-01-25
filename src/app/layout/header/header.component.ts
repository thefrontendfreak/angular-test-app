import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMObileMenu : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuhandler(){
    this.showMObileMenu =  !this.showMObileMenu;
  }

}
