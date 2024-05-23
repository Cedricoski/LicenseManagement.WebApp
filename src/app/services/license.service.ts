import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { DocubaseLicense } from '../models/docubaseLicense';
import { KcpLicense } from '../models/kcpLicense';
import { DocubaseLicenseType } from '../models/docubaseLicenseType';
import { Client } from '../models/client';
import { User } from '../models/userModel';
import { DocubaseLicenseDto } from '../models/docubaseLicenseDto';
import { KcpLicenseType } from '../models/kcpLicenseType';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  api_url:string='http://localhost:5164/api/';
  itemId:number
  constructor(private http:HttpClient) { }
  
  
  getAllDocubaseLicense():Observable<DocubaseLicenseDto[]>{
    return this.http.get<DocubaseLicenseDto[]>(`${this.api_url}DocubaseLicense`).pipe(
      tap(res=>console.table(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  getDocubaseLicenseById(id:number):Observable<DocubaseLicense>{
    return this.http.get<DocubaseLicense>(`${this.api_url}DocubaseLicense/${id}`).pipe(
      tap(res=>console.table(res)),
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

  getAllKcpLicenseType():Observable<KcpLicenseType[]>{
    return this.http.get<KcpLicenseType[]>(`${this.api_url}KcpLicenseType`).pipe(
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

  postKcpLicense(license:KcpLicense):Observable<KcpLicense>{
    return this.http.post<KcpLicense>(`${this.api_url}KcpLicense`,license).pipe(
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

  updateDocubaseLicense(id:number,license:DocubaseLicense):Observable<DocubaseLicense>{
    return this.http.put<DocubaseLicense>(`${this.api_url}DocubaseLicense/${id}`,license).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  updateKcpLicense(id:number,license:KcpLicense):Observable<KcpLicense>{
    return this.http.put<KcpLicense>(`${this.api_url}KcpLicense/${id}`,license).pipe(
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

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.api_url}User/${id}`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  getClientById(id:number):Observable<Client>{
    return this.http.get<Client>(`${this.api_url}Client/${id}`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

  getDocubaseLicenseTypeById(id:number):Observable<DocubaseLicenseType>{
    return this.http.get<DocubaseLicenseType>(`${this.api_url}DocubaseLicenseType/${id}`).pipe(
      tap(res=>console.log(res)),
      catchError((err)=>{
        console.error(err)
        return []
      })
    )
  }

}


