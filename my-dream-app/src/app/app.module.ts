import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: []
})
export class AppModule { }
