import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddElementService } from '../add-element.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private newElement: AddElementService) { }

  onSubmit(form: NgForm) {
    console.log("ciao");
  }
  /*console.log(form.controls['task'].value);
    this.tasks.tasks.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    }) */
  /*onSubmit(form: NgForm): void {
    this.newElement.addToElement([{ taskName: form.controls["task"].value, isCompleted: false }]);
  }
*/
}
