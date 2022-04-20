import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsClubsComponent } from './page/groups-clubs/groups-clubs.component';
import { HomeComponent } from './page/home/home.component';
import { ANewsComponent } from './page/news/a-news/a-news.component';
import { NewsComponent } from './page/news/news.component';
import { RegisterGroupComponent } from './page/register-group/register-group.component';
import { RelationsComponent } from './page/relations/relations.component';
import { TopbarComponent } from './page/topbar/topbar.component';
import { WelcomeComponent } from './page/welcome/welcome.component';

const routes: Routes = [
  { path: '' ,component:WelcomeComponent},
  { path: 'news' ,component:NewsComponent},
  { path: 'a-news' ,component:ANewsComponent},
  { path: 'topbar' ,component:TopbarComponent},
  { path: 'home' , component:HomeComponent},

// Register
  { path: 'register-group' ,component:RegisterGroupComponent},

// Relations
  {path: 'relations' ,component:RelationsComponent},

  // groups-clubs
  { path: 'groups-clubs' ,component:GroupsClubsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
