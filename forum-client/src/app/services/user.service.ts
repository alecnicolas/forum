import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent } from "@angular/common/http";
import { ForumPost, EditPost, User } from "../types/forum-post";
import { environment } from "src/environments/environment";
import { OktaAuthService } from "@okta/okta-angular";

@Injectable()
export class ForumPostService {
  private forumPostUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {
    this.forumPostUrl = environment.db_host;
  }

  public async login(user) {
    const headers = this.headers;
    return this.http.post(this.forumPostUrl + "/login/", user, {
      headers
    });
  }
}
