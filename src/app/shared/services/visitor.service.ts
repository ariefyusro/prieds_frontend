import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const visitor_api = "/visitors";

const headerConfig = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class VisitorService {
    constructor(private _http: HttpClient) { }
    
    getVisitors(page: number): Observable<any> {
        const getVisitorsUrl = `${visitor_api}?_page=${page}`;
        return this._http.get<any>(getVisitorsUrl, {observe: 'response'});
    }

    postVisitors(visitor): Observable<any> {
        return this._http.post<any>(visitor_api, visitor, headerConfig);
    }
}