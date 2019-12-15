import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'forum-client';
  isAuthenticated: boolean;

  constructor(
    public oktaAuth: OktaAuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => {
        (this.isAuthenticated = isAuthenticated);
      }
    );
  }

  logout() {
    this.oktaAuth.logout();
    this.router.navigateByUrl('/home');
  }
}
