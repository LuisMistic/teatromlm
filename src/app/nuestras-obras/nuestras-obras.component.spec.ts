import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasObrasComponent } from './nuestras-obras.component';

describe('NuestrasObrasComponent', () => {
  let component: NuestrasObrasComponent;
  let fixture: ComponentFixture<NuestrasObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrasObrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrasObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
