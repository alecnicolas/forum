import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// import { ForumInputComponent } from './forum-input/forum-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumPostService } from './services/forum-post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostCardModule } from './post-card/post-card.module';
import { AuthRoutingModule } from "./auth-routing.module";
import { ForumViewComponent } from './forum-view/forum-view.component';
@NgModule({
  declarations: [
    AppComponent,
    ForumViewComponent
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
    AuthRoutingModule,
  ],
  providers: [ForumPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
