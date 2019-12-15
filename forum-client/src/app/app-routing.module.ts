import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { ForumViewComponent } from './forum-view/forum-view.component';


const routes: Routes = [
  {
    path: 'feed',
    component: ForumViewComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
