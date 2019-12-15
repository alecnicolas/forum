import { Component, Input } from '@angular/core';
import { ForumPost } from '../types/forum-post';
import { ForumPostService } from '../services/forum-post.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "app-post-card",
  template: `
    <mat-card-header>
      {{ post.author }}
    </mat-card-header>
    <mat-card-content *ngIf="!editing">
      {{ post.content }}
    </mat-card-content>
    <mat-card-actions *ngIf="!editing" align="end">
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
export class PostCardComponent {
  @Input() post: ForumPost;

  editing: boolean;

  constructor(private forumPostService: ForumPostService) {}

  editForm = new FormGroup({
    content: new FormControl("")
  });

  onEdit() {
    this.forumPostService.editPost(this.editForm.value).subscribe();
    this.editForm.reset();
  }

  onDelete(id: number) {
    this.forumPostService.deletePost(id).subscribe();
  }
}
