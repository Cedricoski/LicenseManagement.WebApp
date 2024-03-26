import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocubaseLicenseComponent } from './pages/docubase-license/docubase-license.component';
import { KcpLicenseComponent } from './pages/kcp-license/kcp-license.component';
import { DocubaseLicenseFormComponent } from './pages/forms/docubase-license-form/docubase-license-form.component';
import { KcpLicenseFormComponent } from './pages/forms/kcp-license-form/kcp-license-form.component';

export const routes: Routes = 
[
    {path:"",component:HomeComponent},
    {path:"license/docubase",component:DocubaseLicenseComponent},
    {path:"license/kcp",component:KcpLicenseComponent},
    {path:"license/docubase/add",component:DocubaseLicenseFormComponent},
    {path:"license/kcp/add",component:KcpLicenseFormComponent}

];
