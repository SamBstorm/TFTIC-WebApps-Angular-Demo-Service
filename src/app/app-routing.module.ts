import { MessagerieComponent } from './Components/messagerie/messagerie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendMessageComponent } from './Components/send-message/send-message.component';

const routes: Routes = [
  {path:'msg', component:MessagerieComponent},
  {path:'send-msg', component:SendMessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
