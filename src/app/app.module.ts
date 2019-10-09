import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';


import { AngularCropperjsModule } from 'angular-cropperjs';

import {
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCheckboxModule, MatSidenavModule, MatIconModule, MatCardModule, MatToolbarModule
} from '@angular/material';
import { LayoutComponent } from './app/image-maneger/layout/layout.component';
import { CameraComponent } from './app/image-maneger/camera/camera.component';
import { EditorComponent } from './app/image-maneger/editor/editor.component';
import { ListComponent } from './app/image-maneger/list/list.component';


import { UploaderComponent } from './app/image-maneger/uploader/uploader.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';




@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,ListComponent,
    LayoutComponent,
    CameraComponent,
    EditorComponent,
    ListComponent,
    LoaderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AngularCropperjsModule,
    AppRoutingModule,
    MatGridListModule, MatProgressSpinnerModule , MatListModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatCardModule,
    FormsModule, NgxDropzoneModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
