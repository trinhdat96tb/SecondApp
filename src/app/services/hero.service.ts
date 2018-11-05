import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class HeroService {
    constructor(private http: HttpClient) {}

    getData(params): Observable<any> {
        return this.http.get('https://api.builtwith.com/free1/api.json?KEY=' + params.key + '&LOOKUP=' + params.lookup);
    }
}
