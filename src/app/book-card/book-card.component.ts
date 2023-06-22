import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatExpansionModule, CdkDrag, FormsModule, CommonModule],
})
export class BookCardComponent{

    books = BOOKS;

}

