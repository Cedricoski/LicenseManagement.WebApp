import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { DocubaseLicense } from '../models/docubaseLicense';
import { KcpLicense } from '../models/kcpLicense';
import { DocubaseLicenseType } from '../models/docubaseLicenseType';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  api_url:string='http://192.168.1.11:5164/api/';
  itemId:number
  constructor(private http:HttpClient) { }
  
  
  getAllDocubaseLicense():Observable<DocubaseLicense[]>{
    return this.http.get<DocubaseLicense[]>(`${this.api_url}DocubaseLicense`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  getAllKcpLicense():Observable<KcpLicense[]>{
    return this.http.get<KcpLicense[]>(`${this.api_url}KcpLicense`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  getAllDocubaseLicenseType():Observable<DocubaseLicenseType[]>{
    return this.http.get<DocubaseLicenseType[]>(`${this.api_url}DocubaseLicenseType`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  getAllClient():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.api_url}Client`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  postDocubaseLicense(license:DocubaseLicense):Observable<DocubaseLicense>{
    return this.http.post<DocubaseLicense>(`${this.api_url}DocubaseLicense`,license).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  deleteDocubaseLicense(id:number){
    return this.http.delete(`${this.api_url}DocubaseLicense/${id}`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }


}


