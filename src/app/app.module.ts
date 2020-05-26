import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterceptorModule } from 'src/app/components/interceptor/interceptor.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    InterceptorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatProgressSpinnerModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
