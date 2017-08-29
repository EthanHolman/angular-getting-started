import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

	private _productUrl = './api/products/products.json';

	constructor(private _http: HttpClient) {

	}

	getProducts(): Observable<IProduct[]> {

		return this._http.get<IProduct[]>(this._productUrl)
			//.do(data => console.log('All: ' + JSON.stringify(data)))
			.catch(this.handleError);
			
	}

	getProducts2(): IProduct[] {
		let products: IProduct[];
		let temp: Observable<IProduct[]> = this.getProducts();
		temp.subscribe(p => { products = p; console.log(p); }, error => alert(error) );

		return products;
	}

	private handleError(err: HttpErrorResponse) {
		console.log(err.message);
		return Observable.throw(err.message);
	}
}