import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcpLicenseComponent } from './kcp-license.component';

describe('KcpLicenseComponent', () => {
  let component: KcpLicenseComponent;
  let fixture: ComponentFixture<KcpLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KcpLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KcpLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
