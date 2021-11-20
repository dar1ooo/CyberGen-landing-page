import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cyber-gallery-component',
  templateUrl: './cyber.gallery.component.html',
  styleUrls: ['./cyber.gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  public showMoreImages = false;
  public showMoreImagesClicked(): void {
    if (this.showMoreImages) {
      this.showMoreImages = false;
    } else {
      this.showMoreImages = true;
    }
  }
}
