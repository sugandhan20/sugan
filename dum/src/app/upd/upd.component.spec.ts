import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdComponent } from './upd.component';

describe('UpdComponent', () => {
  let component: UpdComponent;
  let fixture: ComponentFixture<UpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdComponent]
    });
    fixture = TestBed.createComponent(UpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
