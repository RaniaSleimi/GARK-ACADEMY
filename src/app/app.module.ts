import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule } from './app-rooting.module';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarBasicExample } from './toolbar-basic-example';

import { BodyComponent } from './body/body.component';

import { CalendarComponent } from './calendar/calendar.component';
import { MemberComponent } from './member/member.component';
import { ChampionshipsComponent } from './championships/championships.component';
import { MessagingComponent } from './messaging/messaging.component';
import { AdhesionsComponent } from './adhesions/adhesions.component';
import { EquipesComponent } from './equipes/equipes.component';
import { GoFurtherComponent } from './go-further/go-further.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [ToolbarBasicExample,
                 BodyComponent,
                 CalendarComponent,
                 MemberComponent,
                 ChampionshipsComponent, 
                 MessagingComponent,
                 AdhesionsComponent,
                 EquipesComponent, 
                 GoFurtherComponent, 
                 SidenavComponent],
  imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, FormsModule, MaterialExampleModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [ToolbarBasicExample],
})
export class AppModule {}
