import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSiteComponent } from './hero-site.component';

describe('HeroSiteComponent', () => {
  let component: HeroSiteComponent;
  let fixture: ComponentFixture<HeroSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
