import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockEditorComponent } from './block-editor.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    BlockEditorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    DragDropModule,
  ],
  exports:[
    BlockEditorComponent,
    MatCardModule,
    MatIconModule,
    DragDropModule
  ]
})
export class BlockEditorModule { }
