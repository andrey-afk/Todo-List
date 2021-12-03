import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo-models";
import {select, Store} from '@ngrx/store';
import {AppState, selectAllPosts} from "../../store/post-selectors";
import {Observable} from "rxjs";
import {PostEffects} from "../../store/post-effects";
import * as actions from "../../store/post-actions";
import * as selectors from "../../store/post-selectors";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public todosPost$!: Observable<Todo[]>
  public todo: Todo[] = [];
  public start = 0;

  constructor(
    private todoService: TodoService,
    private readonly store: Store<AppState>,
    private postEffect: PostEffects
  ) { }

  ngOnInit(): void {
    this.todosPost$ = this.store.select(selectAllPosts);
    this.store.dispatch(actions.getPosts());
    this.store.pipe(select(selectAllPosts)).subscribe((res) => {
      console.log(res)
    })
  }

  showAllPosts() {
    this.todoService.getAllPosts(this.start).subscribe(res => {
      this.todo = res;
    })
  }

  onScroll() {
    this.start += 5;
    console.log(this.start)
    this.todoService.getAllPosts(this.start).subscribe(res => {
      this.todo = [...this.todo, ...res]
    })
  }
}
