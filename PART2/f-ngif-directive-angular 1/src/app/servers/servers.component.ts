import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean=true;
  serverCreationStatus: string="no server was created";
  serverName:string="";
  serverCreated: boolean=false;


  constructor() {
    setTimeout(() => {
      this.allowNewServer=false;   
    }, 5000);
   }

onCreateServer(){
  this.serverCreated=true;
  this.serverCreationStatus="server was created!!";
}
 
// onUpdateServerName(event:Event){

//   this.serverName=(<HTMLInputElement> event.target).value;
//   }
  ngOnInit(): void {
  }

}
