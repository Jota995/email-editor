import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatIconModule} from '@angular/material/icon';
import { BlockEditorModule } from '../block-editor/block-editor.module';



@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    BlockEditorModule
  ],
  exports:[
    TabsComponent,
    MatIconModule
  ]
})
export class TabsModule { }
