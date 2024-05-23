import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocubaseComponent } from './edit-docubase.component';

describe('EditDocubaseComponent', () => {
  let component: EditDocubaseComponent;
  let fixture: ComponentFixture<EditDocubaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDocubaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDocubaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
