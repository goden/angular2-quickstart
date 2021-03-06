import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

// Imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { TitleComponent } from './title.component';

import { HighlightDirective } from './highlight.directive';

import { HeroService } from './hero.service';
import { UserService } from './user.service';

import { routing } from './app.routing';

@NgModule({
  imports:      [ 
  					BrowserModule, 
  					FormsModule,
  					routing,
  					HttpModule,
  					InMemoryWebApiModule.forRoot(InMemoryDataService)
  				],
  declarations: [ 
  					AppComponent, 
  					HeroDetailComponent, 
  					HeroesComponent,
  					DashboardComponent,
  					HeroSearchComponent,
  					HighlightDirective,
            TitleComponent
  				],
  bootstrap: 	[ 
  					AppComponent 
  				],
  providers:	[
  					HeroService,
            UserService
  				]
})
export class AppModule { }
