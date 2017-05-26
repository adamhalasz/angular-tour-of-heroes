import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component' 
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
