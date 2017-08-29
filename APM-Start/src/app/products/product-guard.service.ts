import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

/* This product-guard-service runs canActivate() in this case, to check if a value is valid BEFORE loading the route and it's corresponding component */

@Injectable()
export class ProductGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1) {
      alert("Invalid product ID");
      this._router.navigate(['/products']);
      return false;
    }

    return true;
  }

  constructor(private _router: Router) { }

}
