import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiTrabajamosComponent } from './asi-trabajamos.component';

describe('AsiTrabajamosComponent', () => {
  let component: AsiTrabajamosComponent;
  let fixture: ComponentFixture<AsiTrabajamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsiTrabajamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsiTrabajamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
