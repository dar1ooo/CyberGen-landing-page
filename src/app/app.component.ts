import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public showMintingNotPossible = false;
  public discordURL = 'https://discord.gg/3D6RN4k3FB';

  public showErrorMessage(): void {
    this.showMintingNotPossible = true;
  }
  public openDiscord(): void {
    window.open(this.discordURL, '_blank');
  }
}
