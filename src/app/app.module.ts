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
import { LayoutComponent } from './app/image-manager/layout/layout.component';
import { CameraComponent } from './app/image-manager/camera/camera.component';
import { EditorComponent } from './app/image-manager/editor/editor.component';
import { ListComponent } from './app/image-manager/list/list.component';


import { UploaderComponent } from './app/image-manager/uploader/uploader.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';


const dbConfig: DBConfig = {
  name: 'MyDb', version: 1, objectStoresMeta: [
    {
      store: 'files',
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [
        { name: 'docs', keypath: 'docs', options: { unique: false } },
      ]
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent, ListComponent,
    LayoutComponent,
    CameraComponent,
    EditorComponent,
    ListComponent,
    LoaderComponent,
    SpinnerComponent
  ],
  imports: [
      NgxIndexedDBModule.forRoot(dbConfig),
    BrowserModule,
    AngularCropperjsModule,
    AppRoutingModule,
    MatGridListModule, 
    MatProgressSpinnerModule, MatListModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatCardModule,
    FormsModule, NgxDropzoneModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
