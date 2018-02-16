import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', selecting by attribute
  // selector: '.app-servers', selecting by class
  selector: 'app-servers',
//   template: `
// <app-server></app-server>
// <app-server></app-server>
// <app-server></app-server>`,
templateUrl: '../servers/servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverState = 'Server not created';
  serverName = '';
  serverCreated = false;
  serversCreated = ['Serverone', 'Servertwo']
  constructor() {
    // setTimeout(() => {
    //   return this.allowNewServer = true;
    // }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer(): void{
    this.serverCreated = true;
    this.serversCreated.push(this.serverName);
    this.serverState = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName( event: Event){ 
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
