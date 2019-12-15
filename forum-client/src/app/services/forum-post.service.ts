import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForumPost, EditPost } from '../types/forum-post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   }),
   observe: 'response' as 'body'
 };
@Injectable()
export class ForumPostService {
  private forumPostUrl: string;

  constructor(private http: HttpClient) {
    this.forumPostUrl = environment.db_host;
  }

  public findAll(): Observable<ForumPost[]> {
    return this.http.get<ForumPost[]>(this.forumPostUrl + '/get_posts');
  }

  public deletePost(id: number) {
    return this.http.delete(this.forumPostUrl + '/delete_post/' + id);
  }

  public editPost(post: EditPost) {
    return this.http.put(this.forumPostUrl + '/edit', post);
  }

  public save(post: ForumPost) {
    return this.http.post<ForumPost>(this.forumPostUrl + '/new_post', post);
  }
}
