import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input('v') content : string = ' ';
@Input('n') name : string = ' ';

  constructor() { }

  ngOnInit(): void {
  }

}
