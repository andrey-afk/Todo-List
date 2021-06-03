import {Injectable} from "@angular/core";
import {of, throwError} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly email = 'admin@admin.com'
  private readonly password = 'admin'

  login(payload: {email: string, password: string}) {
    return of(payload.email).pipe(
      switchMap(e => {
        if(payload.email !== this.email) {
          return throwError( 'user doesnt exist' )
        }
        if(payload.password !== this.password) {
          return throwError( 'credentials doesnt much' )
        }
        return of(e)
      })
    )
  }
}
