import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, share } from 'rxjs';
import { AddElementService } from '../add-element.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tasks: Observable<[{}]> = [{ taskName: "Lavare i denti", isCompleted: false }];

  constructor(private newElement: AddElementService) {
    this.newElement.elementSubject.pipe(share());
  }


}
