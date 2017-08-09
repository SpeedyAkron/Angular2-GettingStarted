import { Component } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute} from '@angular/router';

@Component({

    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
    public pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute) {

    }
}