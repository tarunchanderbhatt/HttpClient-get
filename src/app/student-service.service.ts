import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TypeCasting } from "./type-casting";

@Injectable({
  providedIn: "root"
})
export class StudentServiceService {
  apiurl = "/api/studentDetail";
  messUrl = "/api/welcome";
  constructor(private http: HttpClient) {}

  // json Formate Subscriation
  getStudent(): Observable<TypeCasting[]> {
    return this.http.get<TypeCasting[]>(this.apiurl, { responseType: "json" });
  }

  // text Formate
  getMess(): Observable<string> {
    return this.http.get(this.messUrl, { responseType: "text" });
  }

  // Using httpHeader
  filterStuden(age: number, name: string): Observable<TypeCasting[]> {
    return this.http.get<TypeCasting[]>(
      this.apiurl + "?age=" + age + "&name=" + name,
      {
        responseType: "json"
      }
    );
  }
}
