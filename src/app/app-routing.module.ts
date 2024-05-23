import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { RegisterComponent } from './register/register.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { EventComponent } from './event/event.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { WeatherRecommendationModalComponent } from './weather-recommendation-modal/weather-recommendation-modal.component';
import { ClothingCategoriesComponent } from './clothing-categories/clothing-categories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"weather",component:WeatherComponent ,canActivate: [AuthGuard]},
{path:"account",component:AccountComponent,canActivate: [AuthGuard]},
{path:"footer",component:FooterComponent,canActivate: [AuthGuard]},
{path:"navbar",component:NavbarComponent,canActivate: [AuthGuard]},
{path:"howitwork",component:HowItWorkComponent,canActivate: [AuthGuard]},
{path:"service",component:HomeServiceComponent,canActivate: [AuthGuard]},
{path:"register",component:RegisterComponent},
{path:"leftmeteo",component:LeftContainerComponent,canActivate: [AuthGuard]},
{path:"rightmeteo",component:RightContainerComponent,canActivate: [AuthGuard]},
{path:"categorie",component:CategorieComponent,canActivate: [AuthGuard]},
{path:"calendar",component:CalendarComponent,canActivate: [AuthGuard]},
{path:"chatbot",component:ChatbotComponent,canActivate: [AuthGuard]},
{path:"wardrob",component:WardrobeComponent , children:[{path:'a',component:ClothingCategoriesComponent}],canActivate: [AuthGuard]},
{path:"event",component:EventComponent},
{path:"sidebar",component:SidebareComponent,canActivate: [AuthGuard]},
{path:"weatherRecommendation",component:WeatherRecommendationModalComponent,canActivate: [AuthGuard]},
{path:"profil",component:UserProfileComponent,canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
