import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CreateTaskComponent} from './createTask/createTask.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {KanbanboardComponent} from './kanbanboard/kanbanboard.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    KanbanboardComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        DragDropModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatSidenavModule,
        MatTabsModule
    ],
  providers: [
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
