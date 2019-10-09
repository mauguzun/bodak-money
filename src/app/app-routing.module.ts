import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LayoutComponent } from './app/image-maneger/layout/layout.component';
import { EditorComponent } from './app/image-maneger/editor/editor.component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: LayoutComponent }]
  },
  { path: 'editor/:id', component: EditorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
