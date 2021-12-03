import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material-module";
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {StoreFeatureModule, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./store/post-effects";
import {postReducer} from "./store/post-reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostsPageComponent,
    LoginPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
