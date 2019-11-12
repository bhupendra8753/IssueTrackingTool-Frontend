import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { IssueDescriptionViewComponent } from './issue-description-view/issue-description-view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// https://www.syncfusion.com/kb/9864/how-to-get-started-easily-with-syncfusion-angular-7-rich-text-editor
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './../shared/search-pipe';
import { RouteGuardService } from './route-guard.service';



@NgModule({
  declarations: [DashboardViewComponent, IssueDescriptionViewComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    RichTextEditorAllModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardViewComponent },
      { path: 'description', component: IssueDescriptionViewComponent },
      { path: 'description/:issueId', component: IssueDescriptionViewComponent }
    ])
  ],
  providers: [RouteGuardService]
})
export class IssueTrackerModule { }
