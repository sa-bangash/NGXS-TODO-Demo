import { State, Action, StateContext, Selector } from '@ngxs/store';
import { FetchTodos } from './app.actions';
import { AppService } from './app.service';

export class Todo {
  id: number;
  text: string;
  done: boolean;
}
export class AppStateModel {
  public todos: Todo[]=[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    todos: []
  }
})
export class AppState {

  @Selector()
  static getList(state:AppStateModel):Todo[]{
    return state.todos;
  }
  constructor(private appService: AppService) {

  }
  @Action(FetchTodos)
  fetchTodos(ctx: StateContext<AppStateModel>) {
    const data = this.appService.getList();
    ctx.setState({
      todos: data,
    })
  }


}
