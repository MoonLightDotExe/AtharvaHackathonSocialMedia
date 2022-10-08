import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { LikeComponent } from './like/like.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    HeaderBarComponent,
    SignInComponent,
    SignUpComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: SignInComponent},
      {path: 'signUp', component: SignUpComponent},
      {path: 'main', component: MainComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
