import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title = 'My card title';
  text = 'Some text for paragraph';

  textColor = ''

  ngOnInit() {}
  changeTitle()
  {
    this.title = 'Title was changed'
  }

/*   onInput(event: any) {
    const value = event.target.value
    this.title = value
} */

changeHandler(){
  console.log(this.title);
  
}
}
