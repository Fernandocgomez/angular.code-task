import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostsComponent } from './src/components/create-posts/create-posts.component';
import { AllPostsComponent } from './src/components/all-posts/all-posts.component';
import { NavBarComponent } from './src/components/nav-bar/nav-bar.component';
import { WelcomeMsgComponent } from './src/components/welcome-msg/welcome-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostsComponent,
    AllPostsComponent,
    NavBarComponent,
    WelcomeMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
