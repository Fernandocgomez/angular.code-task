import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostsComponent } from './src/components/create-posts/create-posts.component';
import { AllPostsComponent } from './src/components/all-posts/all-posts.component';
import { NavBarComponent } from './src/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostsComponent,
    AllPostsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
