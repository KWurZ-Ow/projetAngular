import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSingleComponent } from './images-single.component';

describe('ImagesSingleComponent', () => {
  let component: ImagesSingleComponent;
  let fixture: ComponentFixture<ImagesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
