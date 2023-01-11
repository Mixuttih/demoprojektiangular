import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateproductComponent } from './admincreateproduct.component';

describe('AdmincreateproductComponent', () => {
  let component: AdmincreateproductComponent;
  let fixture: ComponentFixture<AdmincreateproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
