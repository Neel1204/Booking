import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Books[];
  searchValue: string;
  tagValue: string;

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(){
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBookList().subscribe(data => {
      this.books = data.books;
    });
  }
}

@Pipe({
  name: 'average'
})
export class AvgPipe implements PipeTransform {
  transform(items: any[]): any {
    return items.reduce((a, b) => a + +b, 0) / items.length;
  }
}
