import { Component } from '@angular/core';

@Component({
  selector: 'cyber-gallery-component',
  templateUrl: './cyber.gallery.component.html',
  styleUrls: ['./cyber.gallery.component.scss'],
})
export class GalleryComponent {
  public showMintingNotPossible = false;
  public discordURL = 'https://discord.gg/3D6RN4k3FB';

  public showErrorMessage(): void {
    this.showMintingNotPossible = true;
  }
  public openDiscord(): void {
    window.open(this.discordURL, '_blank');
  }
}
