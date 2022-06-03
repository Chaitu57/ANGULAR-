import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    buttonOn:boolean=false;
    numarray: number []=[]
       num: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    buttonoff(){
       this.buttonOn=!(this.buttonOn);
       this.numarray.push(this.numarray.length+1);
    }

     getColor(count:number){
          return count % 2==0 ?'yellow':'blue';

         }

    }


