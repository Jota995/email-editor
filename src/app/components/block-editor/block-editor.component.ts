import { Component } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-block-editor',
  templateUrl: './block-editor.component.html',
  styleUrls: ['./block-editor.component.css']
})
export class BlockEditorComponent {
  onDragEnded(event: CdkDragEnd): void {
    // Restablece la posición del elemento a su posición inicial
    event.source.reset();
  }
}
