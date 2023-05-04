import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
 // newServerName = '';
 // newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContent') serverContent?:ElementRef<any>;
  onAddServer(serverName:string) {
    console.log(this.serverContent)
    this.serverCreated.emit({serverName: serverName, serverContent: this.serverContent?.nativeElement?.value})
  }

  onAddBlueprint(serverName:string) {
    this.bluePrintCreated.emit({serverName: serverName, serverContent: this.serverContent?.nativeElement?.value})
  }
}
