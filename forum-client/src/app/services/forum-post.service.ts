import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForumPost } from '../forum-post';
import { Observable } from 'rxjs';

@Injectable()
export class ForumPostService {
  private forumPostUrl: string;

  constructor(private http: HttpClient) {
    this.forumPostUrl = '//localhost:8080';
  }

  public findAll(): Observable<ForumPost[]> {
    return this.http.get<ForumPost[]>(this.forumPostUrl + '/get_posts');
  }

  public save(post: ForumPost) {
    return this.http.post<ForumPost>(this.forumPostUrl + '/new_post', post);
  }
}
