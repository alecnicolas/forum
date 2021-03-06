import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { ForumPost, EditPost } from '../types/forum-post';
import { environment } from 'src/environments/environment';
import { OktaAuthService } from '@okta/okta-angular';
import { UserService } from './user.service';

@Injectable()
export class ForumPostService {
  private forumPostUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService, private userService: UserService) {
    this.forumPostUrl = environment.db_host;
  }

  public async findAll() {
    if (!this.headers) {
      const token = await this.oktaAuth.getAccessToken();
      this.headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    }
    const headers = this.headers;
    return this.http.get<ForumPost[]>(this.forumPostUrl + '/get_posts', {
      headers
    });
  }

  public async findMine() {
    const headers = this.headers;
    return this.http.get<ForumPost[]>(this.forumPostUrl + '/get_posts/' + this.userService.getUser().email, {
      headers
    });
  }

  public async deletePost(id: number) {
    const headers = this.headers;
    return this.http.delete(this.forumPostUrl + '/delete_post/' + id, {
      headers
    });
  }

  public async editPost(post: EditPost) {
    const headers = this.headers;
    return this.http.put(this.forumPostUrl + '/edit', post, { headers });
  }

  public async save(id: number, post: ForumPost) {
    const headers = this.headers;
    return this.http.post<ForumPost>(this.forumPostUrl + '/new_post/' + id.toString(), post, {
      headers
    });
  }
}
