import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocubaseLicenseComponent } from './docubase-license.component';

describe('DocubaseLicenseComponent', () => {
  let component: DocubaseLicenseComponent;
  let fixture: ComponentFixture<DocubaseLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocubaseLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocubaseLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
