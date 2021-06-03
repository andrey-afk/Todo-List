import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DetailUserInfo, PostComments, Todo} from "../models/todo-models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllPosts(start: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`)
  }

  getPostById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  getDetailInfo(id: number): Observable<DetailUserInfo> {
    return this.http.get<DetailUserInfo>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getAllPostComments(id: number): Observable<PostComments> {
    return this.http.get<PostComments>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
