import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    templateUrl: "./product-list.component.html",
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Ethan's List of Products";
    imageWidth: number = 50;
    imageMargin: number = 2;
    imagesVisible: boolean = false;
    filteredProducts: IProduct[];
    errorMessage: string;
    products: IProduct[] = [];
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = (this.listFilter) ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private _productService: ProductService) {
        
    }

    ngOnInit(): void {
        console.log("In OnInit @ product-list.component.ts");
        this._productService.getProducts()
            .subscribe(p => {
                this.products = p;
                this.filteredProducts = this.products;
            }, error => this.errorMessage = <any>error);
    }



    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImageVisibility(): void {
        this.imagesVisible = !this.imagesVisible;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}