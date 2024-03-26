import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../partials/sidebar/sidebar.component";
import { TopbarComponent } from "../../partials/topbar/topbar.component";
import { FooterComponent } from "../../partials/footer/footer.component";
import { CommonModule } from '@angular/common';
import { LicenseService } from '../../services/license.service';
import { DocubaseLicense } from '../../models/docubaseLicense';
import DataTable from 'datatables.net-dt';
import { ContextService } from '../../context.service';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-docubase-license',
    standalone: true,
    templateUrl: './docubase-license.component.html',
    styleUrl: './docubase-license.component.css',
    imports: [CommonModule,RouterModule,SidebarComponent, TopbarComponent, FooterComponent],
    
})

export class DocubaseLicenseComponent implements OnInit {
    docubaseLicenses:DocubaseLicense[]
    isBrowser:boolean;
    constructor(private licenseService:LicenseService ,private contextService:ContextService){}

    

    ngOnInit(): void {
        this.docubaseLicenses=[];
        this.isBrowser=this.contextService.isBrowser();
        if (this.contextService.isBrowser()) {
            this.getLicensesDatatable()
        }
    }

   

    

    

    getLicensesDatatable(){
        this.licenseService.getAllDocubaseLicense().subscribe(res=>
            {
                this.docubaseLicenses=res
                setTimeout(function(){
                    $('#example').DataTable();
                },1)
            })
        
        
    }


}
