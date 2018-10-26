import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`h1 {color : red; font-family : "Times New Roman";}`],
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreatedStatus = "Waiting to create a server";
  serverName = "Nikhil";
  serverList = [
    { name : "CSP" },
    { name : "FaaS" },
    { name : "MS" }
  ]
  constructor() { }

  ngOnInit() {
  }

  onInputUpdate(event : Event) {
    this.serverName = "Sever " + (<HTMLInputElement> event.target).value;
    console.log("event", <HTMLInputElement> event.target);
  }

  createServer(e) {
    console.log(e);
    
    this.serverList.push({name : (<HTMLInputElement> event.target).value});
    this.serverCreatedStatus = "Server created";
  }

  deleteServer(indx) {
    console.log(indx);
    this.serverList.splice(indx, 1);
    console.log(this.serverList);
  }
}
