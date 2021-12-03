import { createAction, props } from '@ngrx/store';
import {Todo} from "../models/todo-models";

export const getPosts = createAction('[Posts Component] Get all Posts');
export const getPostsSuccess = createAction('[Posts Component] Get all Posts Success', props<{ posts: Todo[] }>());

