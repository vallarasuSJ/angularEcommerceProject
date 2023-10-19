import { ProductDetails } from "./product-details";
import { User } from "./user";

export interface Cart { 
    user?:number,
    id?:number,
    userId?:User,
    prodId?:number,

  
    name?: string,
    description: string,
    price: number,
    image: string, 
    title:string, 
    count?:number, 
    total?:number, 
    cartCount?:number, 
    email?:string,
    password?:string,
    
}
