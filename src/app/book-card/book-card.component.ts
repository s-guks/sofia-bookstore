import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CdkDrag],
})
export class BookCardComponent{


}

