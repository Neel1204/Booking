export class Books {
  name: string;
  type: string;
  id: number;
  test: string;
  url: string;
  locale: string;
  images: string;
  sales: string;
  dates: string;
  classifications: string;

  constructor(a?) {
    if (a) {
      this.name = a.name;
      this.id = a.id;
      this.type = a.type;
      this.test = a.test;
      this.url = a.url;
      this.locale = a.locale;
      this.images = a.images;
      this.sales = a.sales;
      this.dates = a.dates;
      this.classifications=a.classifications;
    }
  }
}

export class Embedded {
  events: Books[];
}
