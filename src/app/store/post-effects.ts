import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map , switchMap} from 'rxjs/operators';
import {TodoService} from "../services/todo.service";
import * as actions from "./post-actions";
import {Todo} from "../models/todo-models";
@Injectable()
export class PostEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType(actions.getPosts.type),
      switchMap(() => this.todoService.getPosts().pipe(
        map((posts) => {
          return  actions.getPostsSuccess({posts})
        })
      ))
    )

  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}
