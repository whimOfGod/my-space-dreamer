import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardSectionComponent } from './image-card-section.component';

describe('ImageCardSectionComponent', () => {
  let component: ImageCardSectionComponent;
  let fixture: ComponentFixture<ImageCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCardSectionComponent]
    });
    fixture = TestBed.createComponent(ImageCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
