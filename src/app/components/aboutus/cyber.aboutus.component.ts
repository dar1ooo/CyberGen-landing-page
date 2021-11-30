import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cyber-aboutus-component',
  templateUrl: './cyber.aboutus.component.html',
  styleUrls: ['./cyber.aboutus.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutUsComponent {
  public showMintingNotPossible = false;
  public discordURL = 'https://discord.gg/3D6RN4k3FB';

  public showErrorMessage(): void {
    this.showMintingNotPossible = true;
  }
  public openDiscord(): void {
    window.open(this.discordURL, '_blank');
  }
}
