import { Component } from '@angular/core';
import { FooterComponent } from "../../partials/footer/footer.component";
import { TopbarComponent } from "../../partials/topbar/topbar.component";
import { SidebarComponent } from "../../partials/sidebar/sidebar.component";
import { LicenseService } from '../../services/license.service';
import { ContextService } from '../../context.service';
import { KcpLicense } from '../../models/kcpLicense';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-kcp-license',
    standalone: true,
    templateUrl: './kcp-license.component.html',
    styleUrl: './kcp-license.component.css',
    imports: [CommonModule, RouterModule, TopbarComponent, FooterComponent, SidebarComponent]
})
export class KcpLicenseComponent {
    kcpLicenses:KcpLicense[]
    isBrowser:boolean;
    constructor(private licenseService:LicenseService ,private contextService:ContextService ){}

    ngOnInit(): void {
        this.kcpLicenses=[];
        this.isBrowser=this.contextService.isBrowser();
        if (this.contextService.isBrowser()) {
            this.getLicensesDatatable()
        }
    }

    
    getLicensesDatatable(){
        
        $(document).ready(() => {
            this.licenseService.getAllKcpLicense().subscribe(res=>this.kcpLicenses=res)
            $('#example2').DataTable();
          });
        
    }

}
