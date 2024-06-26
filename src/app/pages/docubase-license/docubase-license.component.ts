import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../partials/sidebar/sidebar.component";
import { TopbarComponent } from "../../partials/topbar/topbar.component";
import { FooterComponent } from "../../partials/footer/footer.component";
import { CommonModule } from '@angular/common';
import { LicenseService } from '../../services/license.service';
import { DocubaseLicense } from '../../models/docubaseLicense';
import DataTable from 'datatables.net-dt';
import { ContextService } from '../../context.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { Client } from '../../models/client';
import { DocubaseLicenseType } from '../../models/docubaseLicenseType';
import { DocubaseLicenseDto } from '../../models/docubaseLicenseDto';
@Component({
    selector: 'app-docubase-license',
    standalone: true,
    templateUrl: './docubase-license.component.html',
    styleUrl: './docubase-license.component.css',
    imports: [CommonModule,RouterModule,SidebarComponent, TopbarComponent, FooterComponent, SpinnerComponent],
    
})

export class DocubaseLicenseComponent implements OnInit {
    docubaseLicenses:DocubaseLicenseDto[]
    isBrowser:boolean;
    constructor(private licenseService:LicenseService ,private contextService:ContextService, private router:Router, private toastr:ToastrService){}

    

    ngOnInit(): void {
        this.isBrowser=this.contextService.isBrowser()
        
        this.getLicensesDatatable()
    }
    
    

    getLicensesDatatable(){
        
        if (this.contextService.isBrowser()) {
            $('#example').DataTable().destroy();
            this.licenseService.getAllDocubaseLicense().subscribe(res=>
                {
                    this.docubaseLicenses=res
                    
                    setTimeout(function(){
                       
                        $('#example').DataTable();
                    },1)
                })
            
        }
        
        
    }

    getClientById(id:number){
        var client : Client
        this.licenseService.getClientById(id).subscribe((res)=>{
          client=res;
          return client.name
        })
        
        return ""
      }

      getClientCountry(id:number){
        var client : Client
        this.licenseService.getClientById(id).subscribe((res)=>{
          client=res;
          return client.country.name
        })
        
        return ""
      }

      getDocubaseType(id:number){
        var docubaseType : DocubaseLicenseType
        this.licenseService.getDocubaseLicenseTypeById(id).subscribe((res)=>{
          docubaseType=res;
          return docubaseType.name
        })
        
        return ""
      }

    setItem(id:number){
        this.licenseService.itemId=id
    }

    deleteLicense(){
        this.licenseService.deleteDocubaseLicense(this.licenseService.itemId).subscribe(()=>{
            
            this.getLicensesDatatable()
            this.toastr.success('Suppression réussie!', 'Licence Docubase');
            this.router.navigate(['/license/docubase']) 
        })
        
        
    }

}
