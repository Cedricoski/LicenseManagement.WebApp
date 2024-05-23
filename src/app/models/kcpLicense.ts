import { Client } from "./client";
import { KcpLicenseType } from "./kcpLicenseType";
import { User } from "./userModel";

export class KcpLicense{
    id: number;
    number: string;
    acquisitionDate: string;
    expirationDate: string;
    object: string;
    kcpLicenseTypeId: number;
    userId: number;
    clientId: number;
    kcpLicenseType: KcpLicenseType;
    user: User;
    client: Client;
}