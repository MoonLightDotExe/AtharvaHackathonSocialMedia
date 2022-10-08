import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isLiked') isLiked : boolean = false;
  @Input('likesCount') count : number = 0;
  
  ngOnInit(): void {
  }

  onClick(){
    if(this.isLiked){
      this.count--;
    }
    else{
      this.count++;
    }
    this.isLiked=!this.isLiked;
  }
}
