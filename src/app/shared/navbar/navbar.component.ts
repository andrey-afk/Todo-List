import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/Auth-service";
import {Router} from "@angular/router";
import {interval} from "rxjs";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public timer =  interval(1000)
  public email!: string | null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.email = this.localStorageService.getStorageEmail()
  }

  logout() {
    this.localStorageService.removeStorage()
    this.router.navigate(['/'])
  }



}
