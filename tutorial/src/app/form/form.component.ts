import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  disabled = false;

  ngOnInit() {
    setTimeout(() => {
      this.disabled = true;
    }, 5000);
  }
  
}
