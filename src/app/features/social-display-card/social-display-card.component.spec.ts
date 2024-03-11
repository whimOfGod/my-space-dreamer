import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDisplayCardComponent } from './social-display-card.component';

describe('SocialDisplayCardComponent', () => {
  let component: SocialDisplayCardComponent;
  let fixture: ComponentFixture<SocialDisplayCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialDisplayCardComponent]
    });
    fixture = TestBed.createComponent(SocialDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
