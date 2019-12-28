import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './image-manager/layout/layout.component';
import { EditorComponent } from './image-manager/editor/editor.component';
import { ListComponent } from './image-manager/list/list.component';
import { SaveComponent } from './image-manager/save/save.component';


const routes: Routes = [
  {

    path: '', component: LayoutComponent, children: [
      { path: '', component: ListComponent },
      { path: 'editor/:id', component: EditorComponent },
      { path: 'save', component: SaveComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
