import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/cyber.gallery.component';
import { AiExplanationComponent } from './components/ai-explanation/cyber.ai.component';
import { AboutUsComponent } from './components/aboutus/cyber.aboutus.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    AiExplanationComponent,
    AboutUsComponent,
    TeamComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
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
