import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AutoModule } from './auto/auto.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserInterceptorService } from './interceptores/userInterceptor.service'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule,
    AutoModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
