import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { MemberComponent } from './member/member.component';
import { ChampionshipsComponent } from './championships/championships.component';
import { MessagingComponent } from './messaging/messaging.component';
import { AdhesionsComponent } from './adhesions/adhesions.component';
import { EquipesComponent } from './equipes/equipes.component';
import { GoFurtherComponent } from './go-further/go-further.component';

const routes: Routes = [
  { path: '', redirectTo: 'olympiens', pathMatch: 'full' },
  { path: 'olympiens', component: EquipesComponent },
  { path: 'adhesion', component: AdhesionsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'championships', component: ChampionshipsComponent },
  { path: 'equipes', component: EquipesComponent },
  { path: 'member', component: MemberComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: 'go-further', component: GoFurtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
