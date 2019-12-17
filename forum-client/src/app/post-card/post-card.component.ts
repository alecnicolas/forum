import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ForumPost, EditPost } from '../types/forum-post';
import { ForumPostService } from '../services/forum-post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: "app-post-card",
  template: `
    <mat-card-header>
      <mat-card-title>{{ post.email }}</mat-card-title>
    </mat-card-header>
    <mat-card-content *ngIf="!editing">
      {{ post.content }}
    </mat-card-content>
    <mat-card-actions *ngIf="!editing && matched" align="end">
      <button
        mat-mini-fab
        color="accent"
        aria-label="delete"
        (click)="editing = true"
      >
        <mat-icon aria-hidden="false" aria-label="Close">edit</mat-icon>
      </button>
      <button
        mat-mini-fab
        color="warn"
        aria-label="delete"
        (click)="onDelete(post.id)"
      >
        <mat-icon aria-hidden="false" aria-label="Close"
          >delete_forever</mat-icon
        >
      </button>
    </mat-card-actions>
    <form
      *ngIf="editing"
      [formGroup]="editForm"
      novalidate
      (ngSubmit)="onEdit()"
    >
      <mat-card-content>
        <mat-form-field appearance="standard" style="max-width: 300px;">
          <label>
            <input
              matInput
              type="text"
              formControlName="content"
              value="{{ post.content }}"
            />
          </label>
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions>
        <button mat-flat-button color="basic" (click)="editing = false">
          CANCEL
        </button>
        <button
          mat-flat-button
          color="primary"
          type="submit"
          [disabled]="!editForm.valid"
        >
          CONFIRM
        </button>
      </mat-card-actions>
    </form>
  `
})
export class PostCardComponent implements OnInit {
  @Input() post: ForumPost;
  @Output() refresh = new EventEmitter();

  editing: boolean;
  matched: boolean;

  constructor(private forumPostService: ForumPostService, private userService: UserService) {}

  editForm = new FormGroup({
    content: new FormControl("")
  });

  ngOnInit() {
    this.matched = this.post.email === this.userService.getUser().email;
  }

  async onEdit() {
    const newPost: EditPost = {
      id: this.post.id,
      content: this.editForm.value.content
    };
    (await this.forumPostService.editPost(newPost)).subscribe();
    this.editing = false;
    this.refresh.emit();
    this.editForm.reset();
  }

  async onDelete(id: number) {
    (await this.forumPostService.deletePost(id)).subscribe();
    this.refresh.emit();
  }
}
