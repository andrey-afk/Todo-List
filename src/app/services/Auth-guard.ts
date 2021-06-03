import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,} from "@angular/router";
import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return !!this.localStorageService.getStorageEmail()
  }
}
