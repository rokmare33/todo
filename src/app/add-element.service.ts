import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AddElementService {

  private task: [{}] = [{}];
  public elementSubject = new BehaviorSubject<[{}]>([{}]);

  addToElement(task: [{}]) {
    this.task.push(task);
    this.elementSubject.next(this.task);
  };

  constructor() { }
}
