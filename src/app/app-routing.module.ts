import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InputVisitorDetailsComponent } from './menu/visitor-list/input-visitor-details/input-visitor-details.component';
import { MenuComponent } from './menu/menu.component';
import { RequestQueueNumberComponent } from './menu/visitor-list/request-queue-number/request-queue-number.component';
import { VisitorListComponent } from './menu/visitor-list/visitor-list.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'request-queue-number', component: RequestQueueNumberComponent},
  {path: 'input_visitor_details', component: InputVisitorDetailsComponent},
  {path: 'visitor-list', component: VisitorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
