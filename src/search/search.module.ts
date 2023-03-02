import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', component: SearchComponent }]),
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [SearchComponent],
  bootstrap: [SearchComponent],
})
export class SearchModule {}
