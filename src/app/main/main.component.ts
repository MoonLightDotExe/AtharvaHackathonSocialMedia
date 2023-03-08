import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Input } from '@angular/core';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { TrialService } from '../trial.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private trialService : TrialService) { }

  ngOnInit(): void {
  }

  val : string = ' ';
  user : string = 'Om Amonkar';

  friends = [
    {
      name: "Soham Panchal",
      post: "Foo Bar",
      likes: 20
    },
    {
      name: "Rohit",
      post: "Bar Mo",
      likes: 100
    },
    {
      name: "Omkar Patil",
      post: "Eggs",
      likes : 1020
    }
  ];
  postIt(){
   let countJson = this.trialService.getToken();
   this.friends.push({
    name : "Om Amonkar",
    post : countJson.value,
    likes: 0
   });
  }

}
