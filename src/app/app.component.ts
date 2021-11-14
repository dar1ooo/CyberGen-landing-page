import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class HomeComponent {
  public showMintingNotPossible = false;
  public discordURL = 'https://discord.gg/3D6RN4k3FB';
  constructor() {}

  public showErrorMessage(): void {
    this.showMintingNotPossible = true;
  }
  public openDiscord(): void {
    window.open(this.discordURL, '_blank');
  }
}
