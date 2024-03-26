import { Client } from "./client";
import { KcpLicenseType } from "./kcpLicenseType";
import { User } from "./userModel";

export class KcpLicense{
    Id: number;
    Number: string;
    AcquisitionDate: string;
    ExpirationDate: string;
    Object: string;
    KcpLicenseTypeId: number;
    UserId: number;
    ClientId: number;
    KcpLicenseType: KcpLicenseType;
    User: User;
    Client: Client;
}