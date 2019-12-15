import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ForumInputComponent } from './forum-input/forum-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumPostService } from './services/forum-post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostCardModule } from './post-card/post-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    PostCardModule,
  ],
  providers: [ForumPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
