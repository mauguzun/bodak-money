import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';


import { AngularCropperjsModule } from 'angular-cropperjs';

import {
  MatButtonModule,
  MatListModule, MatSnackBarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDialog,
  MatDialogModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs'
import { LayoutComponent } from './image-manager/layout/layout.component';
import { CameraComponent } from './image-manager/camera/camera.component';
import { EditorComponent } from './image-manager/editor/editor.component';
import { ListComponent } from './image-manager/list/list.component';


import { UploaderComponent } from './image-manager/uploader/uploader.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { WebcamModule } from 'ngx-webcam';


import { CardComponent } from './image-manager/card/card.component';
import { SaveComponent } from './image-manager/save/save.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormBuilderComponent } from './form/form-builder/form-builder.component';
import { FormOptionsComponent } from './form/form-options/form-options.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';


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
    SpinnerComponent,
    CardComponent,
    SaveComponent,
    FormBuilderComponent,
    FormOptionsComponent,
    ErrorPageComponent,
  ],
  imports: [
    DragDropModule,
    FormsModule, ReactiveFormsModule, MatDatepickerModule,
    MatNativeDateModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    BrowserModule,
    AngularCropperjsModule,
    AppRoutingModule,
    MatAutocompleteModule, MatStepperModule,
    MatGridListModule, WebcamModule,
    MatProgressSpinnerModule, MatListModule, MatSnackBarModule,
    MatButtonModule, MatCheckboxModule, MatSidenavModule,
    MatIconModule, MatToolbarModule, MatCardModule, MatSelectModule,
    MatInputModule, MatTabsModule, MatProgressBarModule,
    FormsModule, NgxDropzoneModule, MatExpansionModule,
    BrowserAnimationsModule, MatMenuModule, MatFormFieldModule,
    MatDialogModule
  ],  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ErrorPageComponent]

})
export class AppModule { }
