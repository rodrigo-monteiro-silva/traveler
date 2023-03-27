import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateMemoryComponent } from './components/create-memory/create-memory.component';
import { ListMemoryComponent } from './components/list-memory/list-memory.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MemoryComponent } from './components/memory/memory.component';
import { DeleteMemoryComponent } from './components/delete-memory/delete-memory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateMemoryComponent,
    ListMemoryComponent,
    MemoryComponent,
    DeleteMemoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
