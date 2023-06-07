import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tasks = [{
    taskName: "Lavare i denti",
    isCompleted: false
  }];

}
