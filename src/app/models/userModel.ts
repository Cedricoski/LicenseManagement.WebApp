import { DocubaseLicense } from "./docubaseLicense";
import { KcpLicense } from "./kcpLicense";

export class User{
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    token: string;
    role: string;
    email: string;
    licenses: DocubaseLicense[];
    kcpLicenses: KcpLicense[];
}