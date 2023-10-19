import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { ProductDetails } from 'src/app/models/product-details';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }  
  
  //get products using http
  getAllProducts():Observable<ProductDetails[]>{
    return this.http.get<ProductDetails[]>('https://fakestoreapi.com/products');
  }


  // private existingProductDetails: ProductDetails[] = [
  //   { id: 1,
  //     name: 'CONTINO 20 NOISY BOY BMX',
  //     description:
  //       'The BMX NOISY BOY is an amazing build dedicated to riders on a budget,looking for a quality upgrade or a great first BMX you cant go wrong with the Noisy Boy.lt pairs high-performance geometry and thin tyres to make every ride an epic one!',
  //     price: 20000,
  //     image:
  //       'https://cdn.shopify.com/s/files/1/0628/5547/9548/files/NOISYBOY20TSTLREDBLK_720x.jpg?v=1694501828',
  //   },
  //   { id: 2,
  //     name: 'CONTINO 700C WINGULL 24 SPEED',
  //     description:
  //       '  A distinctive gravel Hybrid bike , Wingull possesses the hybrid prowess to dominate both urban streets and rough roads.lt pairs high-performance geometry and thin tyres & 24 Speed to make every ride an epic one!',
  //     price: 12000,
  //     image:
  //       'https://stryderbikes.com/cdn/shop/files/WINGULL700C24SCYAN.jpg?v=1691662233&width=900',
  //   },
  //   { id: 3,
  //     name: 'CONTINO 27.5 TORRAC 21 SPEED',
  //     description:
  //       'The BMX NOISY BOY is an amazing build dedicated to riders on a budget,looking for a quality upgrade or a great first BMX you cant go wrong with the Noisy Boy.lt pairs high-performance geometry and thin tyres to make every ride an epic one!',
  //     price: 17000,
  //     image:
  //       'https://stryderbikes.com/cdn/shop/files/TORRAC21SALYMWREDBLK27T.jpg?v=1691576149&width=900',
  //   },
  //   { id: 4,
  //     name: 'CONTINO 700C WINGULL 8 SPEED',
  //     description:
  //       'The BMX NOISY BOY is an amazing build dedicated to riders on a budget,looking for a quality upgrade or a great first BMX you cant go wrong with the Noisy Boy.lt pairs high-performance geometry and thin tyres to make every ride an epic one!',
  //     price: 14000,
  //     image:
  //       'https://stryderbikes.com/cdn/shop/files/WINGULL700C8SMWINERED.jpg?v=1691662093&width=900',
  //   },
  // ]; 

  //load products
  // getItems():ProductDetails[]{
  //   return this.existingProductDetails;
  // }
}
