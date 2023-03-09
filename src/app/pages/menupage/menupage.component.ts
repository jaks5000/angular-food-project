import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from 'src/app/services/product-details.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:ProductDetailsService) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu')
    if(this.getMenuId)
    {
      this.menuData = this.service.productDetails.filter((value)=>{
        return value.id == this.getMenuId;
      })
    }
  }

}
