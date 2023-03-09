import { Component, OnInit} from '@angular/core';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ProductDetailsService) {  }
  productData:any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }
}
