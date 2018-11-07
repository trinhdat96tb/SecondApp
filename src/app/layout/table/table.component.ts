import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() options: any = {};
  @Input() data: any[];

  @Output() originItems: any[];
  @Output() items: any[];

  constructor() {
    
  }

  ngOnInit() {

  }

  ngOnChanges(changes: any) {
    if(changes.data){
      this.originItems = changes.data.currentValue;
      if(this.originItems){
        this.items = this.originItems;
      }
    }
  }

}
