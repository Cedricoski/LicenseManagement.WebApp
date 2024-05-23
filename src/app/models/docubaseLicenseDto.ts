import { User } from "./userModel";
import { Client } from "./client";
import { DocubaseLicenseType } from "./docubaseLicenseType";

export class DocubaseLicenseDto{
    id: number;
    number: string;
    acquisitionDate: string;
    expirationDate: string;
    object: string;
    docubaseVersion: string;
    hostKey: string;
    operatingSystem: string;
    modules: Array<string>=new Array();
    clientName:string;
    countryName:string;
    docubaseTypeName:string;
    userName:string;
    
}