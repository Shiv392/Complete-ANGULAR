import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdirectiveusingComponent } from './customdirectiveusing.component';

describe('CustomdirectiveusingComponent', () => {
  let component: CustomdirectiveusingComponent;
  let fixture: ComponentFixture<CustomdirectiveusingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomdirectiveusingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomdirectiveusingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
