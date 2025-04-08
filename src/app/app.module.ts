import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';


@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [provideHttpClient(withInterceptorsFromDi()),
		{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
	]
})
export class AppModule { }
