import { createReducer, on, Action } from '@ngrx/store';
import {getPosts, getPostsSuccess} from './post-actions';
import {Todo} from "../models/todo-models";

export interface State {
  posts: Todo[];
  loading: boolean;
}
export const initialState: State = {posts: [], loading: false};

const _postReducer = createReducer(
  initialState,
  on(getPosts, (state) => ({
    ...state, loading: true
  })),
  on(getPostsSuccess, (state, action) => {
    return {
      ...state, loading: false, posts: action.posts
    }
  })
);

export function postReducer(state: State, action: Action) {
  return _postReducer(state, action);
}
