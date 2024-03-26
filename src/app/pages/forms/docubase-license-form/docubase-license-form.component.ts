import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TopbarComponent } from '../../../partials/topbar/topbar.component';
import { SidebarComponent } from '../../../partials/sidebar/sidebar.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { DocubaseLicenseType } from '../../../models/docubaseLicenseType';
import { LicenseService } from '../../../services/license.service';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DocubaseLicense } from '../../../models/docubaseLicense';
import { modulesEnum } from '../../../models/modulesEnum';
import { Router, RouterModule } from '@angular/router';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-docubase-license-form',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule,SidebarComponent,TopbarComponent,FooterComponent],
  templateUrl: './docubase-license-form.component.html',
  styleUrl: './docubase-license-form.component.css'
})
export class DocubaseLicenseFormComponent implements OnInit{

  @Input() license:DocubaseLicense = new DocubaseLicense()
  types:DocubaseLicenseType[];
  clients:Client[];
  modulesList:Array<string>;
  state:boolean
  form:FormGroup
  constructor(private fb:FormBuilder,private licenseService:LicenseService, private router:Router){}

  ngOnInit(): void {
  
    this.licenseService.getAllDocubaseLicenseType().subscribe(datas=>this.types=datas)
    this.licenseService.getAllClient().subscribe(datas=>this.clients=datas)
    this.modulesList=modulesEnum
    
    this.form=this.fb.group(
      {
        number:['',Validators.required],
        acquisitionDate:[''],
        expirationDate:[''],
        object:[''],
        docubaseVersion:[''],
        clientId:[''],
        countryId:[''],
        docubaseLicenseTypeId:[''],
        operatingSystem:[''],
        hostkey:[''],
        modules:new FormArray([],Validators.required)
      }
      )
  }


  hasModule(module:string){
    return this.license.modules.includes(module)
  }

  selectModule($event:Event, module:string){
    const formArray: FormArray = this.form.get('modules') as FormArray;
    const isChecked:boolean = ($event.target as HTMLInputElement).checked
    
    if(isChecked){
      formArray.push(new FormControl(module))
    }else{
      let i: number = 0;

    formArray.controls.forEach((ctrl: any) => {
      if(ctrl.value == module) {
        formArray.removeAt(i);
      }

      i++;
    });

    }
    
  }

  onSubmit(){
    console.log('Submit form!')
    this.license=this.form.value
    this.license.userId=1
    this.licenseService.postDocubaseLicense(this.license).subscribe()
    this.router.navigate(['/license/docubase'])
  }

  

}
