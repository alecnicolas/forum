import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ForumPostService } from './services/forum-post.service';
import { ForumPost } from './types/forum-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forum-client';

  constructor(private forumPostService: ForumPostService) { }

  postForm = new FormGroup({
    author: new FormControl(''),
    content: new FormControl('')
  });

  currentPosts: ForumPost[];

  ngOnInit() { this.onRequest(); }

  onSubmit() {
    this.forumPostService.save(this.postForm.value).subscribe();
    this.onClear();
  }

  onRequest() {
    this.forumPostService.findAll().subscribe( data => {
      this.currentPosts = data;
    });
  }

  onClear() {
    this.postForm.reset();
  }
}
