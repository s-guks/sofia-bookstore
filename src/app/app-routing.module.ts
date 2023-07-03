import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookInputComponent } from './book-input/book-input.component';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'home', component: SortFilterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'book-input', component: BookInputComponent },
  { path: 'room/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
