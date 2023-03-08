import { TrialService } from './../trial.service';
import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private trialService : TrialService, private mainComponent : MainComponent) { }

  ngOnInit(): void {
  }

  value : any ='';
  count : number = 0;
  onClick(){
    if(this.count === 1){
      alert("Limit for day reached. Kal Aana");
      return;
    }
   this.value = prompt("Bta Kuch");
   this.count++;
   this.trialService.setToken({value: this.value, count: this.count});
   this.mainComponent.postIt();
  }
}
