import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcpLicenseFormComponent } from './kcp-license-form.component';

describe('KcpLicenseFormComponent', () => {
  let component: KcpLicenseFormComponent;
  let fixture: ComponentFixture<KcpLicenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KcpLicenseFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KcpLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
