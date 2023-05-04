import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  onAddServer(serverName:string) {
    this.serverCreated.emit({serverName: serverName, serverContent: this.newServerContent})
  }

  onAddBlueprint(serverName:string) {
    this.bluePrintCreated.emit({serverName: serverName, serverContent: this.newServerContent})
  }
}
