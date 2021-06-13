import { Pipe, PipeTransform } from '@angular/core';
import { Books } from './books';

// A Pipe transform interface
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  // Invokes the transform method with the value of a binding as the first argument,
  // and any parameters as the second argument in list form.
  transform(book: Books[] , searchvalue: string): Books[] {
    if (!book || !searchvalue) {
      return book;
    }
    // Use filter to search data by first name and last name.
    return book.filter(data =>
      data.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
  }
}
