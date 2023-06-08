import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor() { }

  tasks = [{
    taskName: "Lavare i denti",
    isCompleted: false
  }];

  onSubmit(form: NgForm) {
    this.tasks.push({
      taskName: form.controls["task"].value,
      isCompleted: false
    })
  }

}
