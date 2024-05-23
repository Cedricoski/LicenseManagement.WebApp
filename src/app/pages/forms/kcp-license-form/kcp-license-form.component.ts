import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../partials/sidebar/sidebar.component';
import { TopbarComponent } from '../../../partials/topbar/topbar.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LicenseService } from '../../../services/license.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KcpLicense } from '../../../models/kcpLicense';
import { KcpLicenseType } from '../../../models/kcpLicenseType';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-kcp-license-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,SidebarComponent,TopbarComponent,FooterComponent],
  templateUrl: './kcp-license-form.component.html',
  styleUrl: './kcp-license-form.component.css'
})
export class KcpLicenseFormComponent implements OnInit{

  @Input() license:KcpLicense = new KcpLicense()
  types:KcpLicenseType[];
  clients:Client[];
  isAddForm:boolean
  modulesList:Array<string>;
  state:boolean
  form:FormGroup
  constructor(private fb:FormBuilder,private licenseService:LicenseService, private route: ActivatedRoute, private router:Router, private toastr:ToastrService){}

  ngOnInit(): void {
    this.isAddForm='add' === this.route.snapshot.url[2].path
    this.licenseService.getAllKcpLicenseType().subscribe(datas=>this.types=datas)
    this.licenseService.getAllClient().subscribe(datas=>this.clients=datas)
  }

  onSubmit(){
    console.log('Submit form!')
    //this.license=this.form.value
    this.license.userId=1
    if(this.isAddForm){
      this.licenseService.postKcpLicense(this.license).subscribe();
      this.toastr.success('Ajout réussi!', 'Licence Docubase');
    }else{
      /*this.licenseService.getDocubaseLicenseTypeById(this.license.docubaseLicenseTypeId).subscribe((res)=>this.license.docubaseType=res)
      this.licenseService.getClientById(this.license.clientId).subscribe((res)=>this.license.client=res)
      this.licenseService.getUserById(this.license.userId).subscribe((res)=>this.license.user=res)*/

      console.log(this.license)

      this.licenseService.updateKcpLicense(+this.license.id,this.license).subscribe()
      this.toastr.success('Modification réussie!', 'Licence Docubase');
    }
    
    this.router.navigate(['/license/docubase'])
    
  }

}
