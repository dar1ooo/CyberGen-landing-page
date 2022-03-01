import { Component, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'cyber-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public showMintMessage = false;
  public discordURL = 'https://discord.gg/cybergen';
  public mintURl = 'https://mint.cybergen.io/';
  public shopURL = 'https://shop.cybergen.io/';
  public activeNavBar = 'home';
  private yOffset: number = 0;
  constructor(private toastr: ToastrService) {}

  public mintClicked(): void {
    window.open(this.mintURl, '_blank');
  }

  public shopClicked(): void {
    window.open(this.shopURL, '_blank');
  }

  public openDiscord(): void {
    window.open(this.discordURL, '_blank');
  }

  public navElementClicked(newActiveNavElement: string): void {
    this.activeNavBar = newActiveNavElement;
    const element = document.getElementById(newActiveNavElement);
    if (element) {
      if (newActiveNavElement === 'about-us') {
        this.yOffset = -200;
      } else {
        this.yOffset = 50;
      }
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + this.yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}

