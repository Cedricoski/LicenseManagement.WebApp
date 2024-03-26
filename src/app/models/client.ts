import { Country } from "./country";
import { DocubaseLicense } from "./docubaseLicense";
import { KcpLicense } from "./kcpLicense";

export class Client{
    id: number;
    name: string;
    email: string;
    docubaseVersion: string;
    hostKey: string;
    countryId: number;
    country: Country;
    licenses: DocubaseLicense[];
    kcpLicenses: KcpLicense[];
}