import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit {

  notes:any=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.notes=this.dataService.getBinData();
  }

  clear(){
    this.notes=[];
    this.dataService.clear();
  }
}
