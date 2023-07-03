import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperybindingComponent } from './properybinding.component';

describe('ProperybindingComponent', () => {
  let component: ProperybindingComponent;
  let fixture: ComponentFixture<ProperybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProperybindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProperybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
