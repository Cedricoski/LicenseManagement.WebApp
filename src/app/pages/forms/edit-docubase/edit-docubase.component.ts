import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LicenseService } from '../../../services/license.service';
import { DocubaseLicense } from '../../../models/docubaseLicense';
import { DocubaseLicenseComponent } from '../../docubase-license/docubase-license.component';
import { DocubaseLicenseFormComponent } from '../docubase-license-form/docubase-license-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-docubase',
  standalone: true,
  imports: [CommonModule,DocubaseLicenseFormComponent],
  templateUrl: './edit-docubase.component.html',
  styleUrl: './edit-docubase.component.css'
})
export class EditDocubaseComponent implements OnInit{

  docubaseLicense:DocubaseLicense|undefined

  constructor(private router:ActivatedRoute, private licenseService:LicenseService, private toastr:ToastrService){
    
  }

  ngOnInit(): void {
    
    const id : string | null = this.router.snapshot.paramMap.get('id')

    if(id){
      this.licenseService.getDocubaseLicenseById(+id).subscribe((res)=>this.docubaseLicense=res)
    }else
    {
      this.docubaseLicense=undefined
    }
    console.log(this.docubaseLicense)
  }


}
