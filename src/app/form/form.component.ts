import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  private tasks = new ListComponent;

  onSubmit(form: NgForm): void {
    console.log(form.controls['task'].value);
    this.tasks.tasks.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
  }
}
