import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState, Todo } from './state/app.state';
import { Observable } from 'rxjs';
import { FetchTodos } from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxs-demo';
  list: Todo[];
  constructor(private store:Store){
    this.store.dispatch(new FetchTodos());
    this.store.select(AppState.getList).subscribe((resp)=>{
      console.log(resp);
      this.list = resp;
    })
  }
}
