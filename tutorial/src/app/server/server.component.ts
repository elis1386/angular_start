import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  imgUrl =
  '/assets/react.jpeg';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl =
        '/assets/angular.jpeg';
    }, 5000);
  }
  getInfo(): string {
    return 'In this components we change the logo "React"  to logo "Angular" after 5 sec after begginer';
  }

}
