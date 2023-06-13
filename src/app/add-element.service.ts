import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AddElementService {
  task = { taskName: "ciao", isCompleted: false }
  private tasks = new BehaviorSubject(this.task)
  getTask = this.tasks.asObservable();

  addToTask(task: {
    taskName: string;
    isCompleted: boolean;
  }) {
    this.tasks.next(task);
  };

  constructor() { }
}
