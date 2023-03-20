import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemoryComponent } from './components/create-memory/create-memory.component';
import { ListMemoryComponent } from './components/list-memory/list-memory.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listMemory',
    pathMatch: 'full',
  },
  {
    path: 'createMemory',
    component: CreateMemoryComponent,
  },
  {
    path: 'listMemory',
    component: ListMemoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
