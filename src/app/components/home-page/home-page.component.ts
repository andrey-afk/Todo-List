import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo-models";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public todo: Todo[] = [];
  public start = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.showAllPosts();
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
