import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingService } from './api/building.service';
import { BuildingResolverService } from './resolver/building-resolver-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './api/http-interceptor';
import { SharedModule } from './shared.module';
import { InitializationService } from './api/initialization.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: APP_INITIALIZER,
      useFactory: (initializationService: InitializationService) =>
          () => initializationService.initApp(),
      deps: [InitializationService],
      multi: true
  },
  InitializationService,
    BuildingService,
    BuildingResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
