// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Kendo-UI modules
import { GridModule, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// App environment
import { environment } from '../environments/environment';

// Backend services
import { ApiModule, Configuration, ConfigurationParameters, BASE_PATH } from './shared/services/backend';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Kendo-UI modules
    ButtonsModule,
    DateInputsModule,
    InputsModule,
    DropDownsModule,
    GridModule,
    ExcelModule,
    PDFModule,
    DialogsModule,
    LayoutModule,
    TooltipModule,
    // RHIR module
    ApiModule
  ],
  providers: [
    {
      provide: Configuration,
      useFactory: () =>
          new Configuration({ basePath: environment.basePath})
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
