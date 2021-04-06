import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any[]=[
    {prodname: 'Smart Phones',brand:'samsung',cost:55555},
    {prodname:'Car', brand:'Hyundai',cost:1777777},
    {prodname:'Tshirts',brand:'polo',cost:333}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
