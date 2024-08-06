import { Component } from '@angular/core';
import { Airline } from './model/Airline';
import { AirlineService } from './airline.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Airline';
  airline:Airline;
  result:string;
  airlineArr:Airline[];
  flag:boolean;

  constructor(private service:AirlineService){
    this.airline=new Airline();
    this.result="";
    this.airlineArr=[];
    this.flag=false;
  }
  insertAirline(data:any){
    this.airline.id=data.airId;
    this.airline.airAge=data.airAge;
    this.airline.airFrom=data.airFrom;
    this.airline.airDes=data.airDes;
    this.airline.airDate=data.airDate;
   this.result= this.service.insertAirline(this.airline)
  }
  updateAirline(data:any){
    this.airline.id=data.airId;
    this.airline.airAge=data.airAge;
    this.airline.airFrom=data.airFrom;
    this.airline.airDes=data.airDes;
    this.airline.airDate=data.airDate;
   this.result= this.service.updateAirline(this.airline)
  }
  deleteAirline(data:any){
    this.result= this.service.deleteAirline(data.airId)
  }
  findAirline(data:any){
    this.airline=this.service.findAirline(data.airId);
    this.result=this.airline.id+"-"+this.airline.airAge+"-"+this.airline.airFrom+"-"+this.airline.airDes+"-"+this.airline.airDate;
  }
  findAllAirline(){
    this.airlineArr=this.service.findAllAirline();
    this.flag=true;
  }
}
