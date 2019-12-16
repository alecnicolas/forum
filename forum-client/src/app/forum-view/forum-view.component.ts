import { Component, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ForumPostService } from '../services/forum-post.service';
import { UserService } from '../services/user.service';
import { ForumPost } from '../types/forum-post';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.scss']
})
export class ForumViewComponent implements OnInit, AfterViewInit {
  title = 'forum-view';

  constructor(
    private forumPostService: ForumPostService,
    private userService: UserService
  ) {}

  postForm = new FormGroup({
    content: new FormControl('')
  });

  currentPosts: ForumPost[];

  ngOnInit() {
    this.onRequest();
  }

  ngAfterViewInit() {
    this.saveUser();
  }

  async onSubmit() {
    const user = this.userService.getUser();
    const post: ForumPost = {
      id: null,
      content: this.postForm.value.content,
      email: user.email
    };
    (await this.forumPostService.save(user.id, post)).subscribe();
    this.onRequest();
    this.onClear();
  }

  async onRequest() {
    (await this.forumPostService.findAll()).subscribe(
      data => {
        this.currentPosts = data;
      },
      (err: any) => {
        console.error(err);
      }
    );
  }

  async onRequestMine() {
    (await this.forumPostService.findMine()).subscribe(
      data => {
        this.currentPosts = data;
      },
      (err: any) => {
        console.error(err);
      }
    );
  }

  async saveUser() {
    this.userService.setUser();
    (await this.userService.createUser()).subscribe(data => this.userService.setId(data));
  }

  onClear() {
    this.postForm.reset();
  }
}
