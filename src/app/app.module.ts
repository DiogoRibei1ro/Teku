import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Adicione esta linha

import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/conversor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Certifique-se de que o FormsModule está aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }