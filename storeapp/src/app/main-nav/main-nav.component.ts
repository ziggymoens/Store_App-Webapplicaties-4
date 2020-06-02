import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  loggedInUser$ = this._authenticationService.user$;

  isHandset$: Observable<boolean> = this.breakpointObserver
   .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authenticationService: AuthenticationService,
    private _router: Router
    ) {}

    logout() {
      this._authenticationService.logout();
      this._router.navigate(['/login']);
    }
    login() {
      console.log('login');
      this._router.navigate(['/login']);
    }

}
