import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/componets/bookstore-app/product-list/product-list.component.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  livros: any;
  bookService : BookService

  constructor(bookService : BookService) { 

    this.bookService = bookService;
  }

  ngOnInit(): void {

    this.livros = this.bookService.getBack().subscribe((data => {

      this.livros = data;
      console.log(this.livros);

    }))

  }

}
