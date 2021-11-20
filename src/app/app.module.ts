import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/cyber.gallery.component';
import { AiExplanationComponent } from './components/ai-explanation/cyber.ai.component';
import { AboutUsComponent } from './components/aboutus/cyber.aboutus.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    AiExplanationComponent,
    AboutUsComponent,
    TeamComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [
    HomeComponent,
    GalleryComponent,
    AiExplanationComponent,
    AboutUsComponent,
    TeamComponent,
  ],
})
export class AppModule {}
