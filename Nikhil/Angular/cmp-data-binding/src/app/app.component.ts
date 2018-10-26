import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type : "server",
      name : "Andromeda",
      content : "Andromeda Server v90.2.1"
    },
    {
      type : "blueprint",
      name : "Andromeda Blueprint",
      content : "Andromeda Blueprint v90.2.1"
    }
  ];
  
  onServerAdded(serverData : {serverType : string, serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData : {serverType : string ,serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: blueprintData.serverType,
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onDeleteServer() {
    this.serverElements.splice(0, 1);
  }
}
