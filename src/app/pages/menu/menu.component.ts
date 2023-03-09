import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:ProductDetailsService) {  }
  productData:any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}
