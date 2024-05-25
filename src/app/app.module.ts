import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { RegisterComponent } from './register/register.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { EventComponent } from './event/event.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { WeatherRecommendationModalComponent } from './weather-recommendation-modal/weather-recommendation-modal.component'
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClothingCategoriesComponent } from './clothing-categories/clothing-categories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DialogModule } from 'primeng/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { MessagesModule } from 'primeng/messages';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';


import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PasswordModule } from 'primeng/password';

import { MessageService, ConfirmationService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EventListComponent } from './event-list/event-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftContainerComponent,
    RightContainerComponent,
    WeatherComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    NavbarComponent,
    HomeServiceComponent,
    HowItWorkComponent,
    RegisterComponent,
    CategorieComponent,
    ChatbotComponent,
    CalendarComponent,
    WardrobeComponent,
    EventComponent,
    SidebareComponent,
    WeatherRecommendationModalComponent,
    ClothingCategoriesComponent,
    UserProfileComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),  BrowserAnimationsModule,
    DialogModule,
    ButtonModule,FontAwesomeModule,ButtonModule,
		RippleModule,MessagesModule,ButtonModule,
		RippleModule,
		InputTextModule,
		

		InputTextareaModule,
		InputGroupModule,
		InputGroupAddonModule,
		PasswordModule,	
		MessagesModule,
		MessageModule,OverlayPanelModule,ConfirmDialogModule, RadioButtonModule

		
	
    
  ],
  providers: [MessageService,ConfirmationService] ,
  bootstrap: [AppComponent],
 
})
export class AppModule { }
