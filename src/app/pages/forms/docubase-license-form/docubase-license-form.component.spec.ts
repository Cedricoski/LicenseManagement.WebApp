import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocubaseLicenseFormComponent } from './docubase-license-form.component';

describe('DocubaseLicenseFormComponent', () => {
  let component: DocubaseLicenseFormComponent;
  let fixture: ComponentFixture<DocubaseLicenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocubaseLicenseFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocubaseLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
