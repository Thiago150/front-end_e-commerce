import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { book } from "./model/book";


@Injectable()

export class BookService 
{
    private url = 'https://localhost:44382/api/bookstore';

    httpOpitions={
        Headers: new HttpHeaders({'content-type': 'aplication/jason'})
    }

    constructor(private http:HttpClient){}

    getBack(){

        return this.http.get(this.url)
    }
    
    
    
}