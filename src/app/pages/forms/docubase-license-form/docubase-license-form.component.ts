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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Client } from '../../../models/client';
import { ToastrService } from 'ngx-toastr';

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
  isAddForm:boolean
  modulesList:Array<string>;
  state:boolean
  form:FormGroup
  constructor(private fb:FormBuilder,private licenseService:LicenseService, private route: ActivatedRoute, private router:Router, private toastr:ToastrService){}

  ngOnInit(): void {
    this.isAddForm='add' === this.route.snapshot.url[2].path
    this.licenseService.getAllDocubaseLicenseType().subscribe(datas=>this.types=datas)
    this.licenseService.getAllClient().subscribe(datas=>this.clients=datas)
    this.modulesList=modulesEnum
    
    /*this.form=this.fb.group(
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
      )*/
  }


  hasModule(module:string){
    return this.license.modules.includes(module)
  }

  /*selectModule($event:Event, module:string){
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
    
  }*/

  selectModule($event:Event,module:string){
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.license.modules.push(module);
    }
    else{
      const index = this.license.modules.indexOf(module);
      this.license.modules.splice(index,1);
    }
  }

  

  onSubmit(){
    console.log('Submit form!')
    //this.license=this.form.value
    this.license.userId=1
    if(this.isAddForm){
      this.licenseService.postDocubaseLicense(this.license).subscribe();
      this.toastr.success('Ajout réussi!', 'Licence Docubase');
    }else{
      /*this.licenseService.getDocubaseLicenseTypeById(this.license.docubaseLicenseTypeId).subscribe((res)=>this.license.docubaseType=res)
      this.licenseService.getClientById(this.license.clientId).subscribe((res)=>this.license.client=res)
      this.licenseService.getUserById(this.license.userId).subscribe((res)=>this.license.user=res)*/

      console.log(this.license)

      this.licenseService.updateDocubaseLicense(+this.license.id,this.license).subscribe()
      this.toastr.success('Modification réussie!', 'Licence Docubase');
    }
    
    this.router.navigate(['/license/docubase'])
    
  }

  

}
