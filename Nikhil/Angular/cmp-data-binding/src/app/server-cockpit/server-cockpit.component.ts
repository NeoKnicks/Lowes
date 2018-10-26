import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter <{serverType : string, serverName : string, serverContent : string}>();
  @Output() blueprintCreated = new EventEmitter <{serverType : string, serverName : string, serverContent : string}>();
  
  @ViewChild('serverName') serverName : ElementRef;
  @ViewChild('serverContent') serverContent : ElementRef;
  newServerType = "";
  newServerName = "";
  newServerContent = "";

  constructor() { }

  ngOnInit() {

  }

  onAddServer() {
    console.log(this.serverName.nativeElement.value);
    console.log(this.serverContent.nativeElement.value);
    this.serverCreated.emit({serverType : "server", serverName : this.serverName.nativeElement.value, serverContent : this.serverContent.nativeElement.value});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverType : "blueprint", serverName : this.serverName.nativeElement.value, serverContent : this.serverContent.nativeElement.value});
  }
}
