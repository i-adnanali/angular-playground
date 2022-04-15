import { Component } from '@angular/core';
import { Dev } from './tdf-class';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  constructor() { }

  modal = new Dev(1, 'Adnan', 'UX', 'Writer');
  stacks = ['FE', 'BE', 'DevOps', 'UX'];

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  newDev(){
    this.modal = new Dev(2, '', '', '');
  }
}
