import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DetailUserInfo, PostComments, Todo} from "../../models/todo-models";
import {TodoService} from "../../services/todo.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  public todo: Todo[] = [];
  public detailInfo: DetailUserInfo[] = [];
  public postComments: PostComments[] = [];
  public id!: number;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id
    if (this.id) {
      forkJoin({
        requestPostById: this.todoService.getPostById(this.id),
        requestDetail: this.todoService.getDetailInfo(this.id),
        requestComment: this.todoService.getAllPostComments(this.id)
      }).subscribe(({requestPostById,requestDetail, requestComment }) => {
        this.todo = [requestPostById];
        this.detailInfo = [requestDetail];
        this.postComments = Object.assign(requestComment)
      })
    }
  }
}
