import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMIComponent } from './kmi.component';

describe('KMIComponent', () => {
  let component: KMIComponent;
  let fixture: ComponentFixture<KMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KMIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
