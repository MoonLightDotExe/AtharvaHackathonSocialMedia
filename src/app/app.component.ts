import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TBD';
  friends = [
    {
      name: "Soham Panchal",
      post: "Thak Chuka hu "
    },
    {
      name: "Rohit ",
      post: "{{ post_user }}"
    },
    {
      name: "Soham Panchal",
      post: "{{ post_user }}"
    }
  ];
}
