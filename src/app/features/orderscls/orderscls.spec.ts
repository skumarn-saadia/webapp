import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderscls } from './orderscls';

describe('Orderscls', () => {
  let component: Orderscls;
  let fixture: ComponentFixture<Orderscls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderscls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderscls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
