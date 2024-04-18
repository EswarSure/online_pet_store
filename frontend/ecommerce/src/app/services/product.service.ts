import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:8080/api/products';
  categoryUrl ="http://localhost:8080/api/product-category"
 

  constructor(private Http: HttpClient) { }

  getProductList(theCategoryId: number) {
    let searchUrl = "http://localhost:8080/api/products/search/findByCategoryId?id=" + theCategoryId;

    return this.Http
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }
  getProductCategories() {
    return this.Http
      .get<GetResponseProductCategory>(this.categoryUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }
  searchProducts(theKeyword: string) {
    let searchProductUrl = "http://localhost:8080/api/products/search/findByNameContaining?name=" + theKeyword;
    
    return this.Http
    .get<GetResponseProducts>(searchProductUrl)
      .pipe(map((response) => response._embedded.products));

    
  }
  getProduct(theProductId: number) {
    let productDetailsUrl = 'http://localhost:8080/api/products/' + theProductId;
    return this.Http.get<Product>(productDetailsUrl);
  }
}
interface GetResponseProducts{ 
  _embedded: {
    products: Product[];
  };
}
interface GetResponseProductCategory{
  _embedded: {
    productCategory: ProductCategory[];
  };
}