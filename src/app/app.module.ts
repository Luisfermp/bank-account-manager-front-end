import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryListComponent } from './summary-list/summary-list.component';
import { AccountMovementComponent } from './account-movement/account-movement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InitAccountPopupComponent } from './init-account-popup/init-account-popup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent,
    SummaryListComponent,
    AccountMovementComponent,
    ToolbarComponent,
    InitAccountPopupComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
