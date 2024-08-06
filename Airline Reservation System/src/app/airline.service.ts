import { Injectable } from '@angular/core';
import { Airline } from './model/Airline';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  url:string;
  airlineArr:Airline[];
  airline:Airline;
  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/airlines";
    this.airline=new Airline();
    this.airlineArr=[];
   }
  insertAirline(airline:Airline){
    this.http.post<Airline>(this.url,airline).subscribe();
    return "Passenger Details Added";
  }
  updateAirline(airline:any){
    this.http.put<Airline>(this.url+"/"+airline.id,airline).subscribe();
    return "Passenger Details Updated";
  }
  deleteAirline(airId:string){
    this.http.delete<Airline>(this.url+"/"+airId).subscribe();
    return "Passenger Details Deleted";
  }
  findAirline(airId:string){
    this.http.get<Airline>(this.url+"/"+airId).subscribe(data=>this.airline=data);
    return this.airline;
  }
  findAllAirline(){
    this.http.get<Airline[]>(this.url).subscribe(data=>this.airlineArr=data);
    return this.airlineArr;
  }
}
