import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('bookService', () => {
  let service: bookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
