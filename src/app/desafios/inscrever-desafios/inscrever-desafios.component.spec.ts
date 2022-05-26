import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreverDesafiosComponent } from './inscrever-desafios.component';

describe('InscreverDesafiosComponent', () => {
  let component: InscreverDesafiosComponent;
  let fixture: ComponentFixture<InscreverDesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscreverDesafiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscreverDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
