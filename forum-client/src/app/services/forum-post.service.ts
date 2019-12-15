import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { ForumPost, EditPost } from '../types/forum-post';
import { environment } from 'src/environments/environment';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable()
export class ForumPostService {
  private forumPostUrl: string;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {
    this.forumPostUrl = environment.db_host;
  }

  public async findAll() {
    const token = await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });
    let fuck = this.http.get<ForumPost[]>(
      this.forumPostUrl + '/get_posts'
    );
    console.log(fuck.subscribe());
    return fuck;
  }

  public async deletePost(id: number) {
    const token = await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
    });
    return this.http.delete(
      this.forumPostUrl + '/delete_post/' + id,
      { headers }
    );
  }

  public async editPost(post: EditPost) {
    const token = await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });
    return this.http.put(this.forumPostUrl + '/edit', post, {headers});
  }

  public async save(post: ForumPost) {
    const token = await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });
    return this.http.post<ForumPost>(
      this.forumPostUrl + '/new_post',
      post,
      {headers}
    );
  }
}
