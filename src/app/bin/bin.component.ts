import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit {

  notes:any=[];
  constructor(private dataService:DataService,private auth:AuthService) { }

  ngOnInit(): void {
    this.notes=this.dataService.getBinData();
  }

  clear(){
    this.notes=[];
    this.dataService.clear();
  }

//   ngOnDestroy(): void {
//     if(this.auth.getExpiration()){
//       localStorage.removeItem('token');
//     }  
// }  
}
