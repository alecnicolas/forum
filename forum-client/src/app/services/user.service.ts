import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { ForumPost, EditPost, User } from '../types/forum-post';
import { environment } from 'src/environments/environment';
import { OktaAuthService } from '@okta/okta-angular';
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  private forumPostUrl: string;
  private headers: HttpHeaders;

  public user = {
    id: -1,
    email: '',
    firstName: '',
    lastName: ''
  };

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {
    this.forumPostUrl = environment.db_host;
  }

  public setId(id: number) {
    this.user.id = id;
  }

  public getUser() {
    return this.user;
  }

  async setUser() {
    const user = await this.oktaAuth.getUser();
    this.user.email = user.email;
    this.user.firstName = user.given_name;
    this.user.lastName = user.family_name;
  }

  async createUser() {
    const token = await this.oktaAuth.getAccessToken();
    const input = await this.oktaAuth.getUser();
    this.headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    const headers = this.headers;
    const user = {
      email: input.email,
      firstName: input.given_name,
      lastName: input.family_name
    };
    return this.http.post<any>(this.forumPostUrl + '/create-user', user, {
      headers
    });
  }

  public checkUser() {
    const headers = this.headers;
    const id = this.http.get(this.forumPostUrl + '/check-user/' + this.user.email, {
      headers
    }).subscribe(data => console.log("I'M HERE", data));
    return id;
  }
}
