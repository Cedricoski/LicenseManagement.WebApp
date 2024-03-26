import { User } from "./userModel";
import { Client } from "./client";
import { DocubaseLicenseType } from "./docubaseLicenseType";

export class DocubaseLicense{
    id: number;
    number: string;
    acquisitionDate: string;
    expirationDate: string;
    object: string;
    docubaseVersion: string;
    hostKey: string;
    operatingSystem: string;
    modules: Array<string>=new Array();
    docubaseLicenseTypeId: number;
    userId: number;
    clientId: number;
    docubaseType: DocubaseLicenseType;
    user: User;
    client: Client;
    
}