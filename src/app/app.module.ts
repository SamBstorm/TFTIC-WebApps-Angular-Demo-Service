import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './Components/main-header/main-header.component';
import { MessagerieComponent } from './Components/messagerie/messagerie.component';
import { SendMessageComponent } from './Components/send-message/send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MessagerieComponent,
    SendMessageComponent
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
