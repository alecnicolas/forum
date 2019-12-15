import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ForumPostService } from '../services/forum-post.service';
import { ForumPost } from '../types/forum-post';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.scss']
})
export class ForumViewComponent implements OnInit {
  title = 'forum-view';

  constructor(
    private forumPostService: ForumPostService
  ) {}

  postForm = new FormGroup({
    author: new FormControl(''),
    content: new FormControl('')
  });

  currentPosts: ForumPost[];

  ngOnInit() {
    this.onRequest();
  }

  async onSubmit() {
    (await this.forumPostService.save(this.postForm.value)).subscribe();
    this.onClear();
  }

  async onRequest() {
    (await this.forumPostService.findAll()).subscribe(data => {
      console.log("help", data);
      this.currentPosts = data;
    }, (err: any) => {
      console.error(err);
    });
  }

  onClear() {
    this.postForm.reset();
  }
}
