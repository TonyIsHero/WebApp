import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSideComponent } from './navbar-side.component';

describe('NavbarSideComponent', () => {
  let component: NavbarSideComponent;
  let fixture: ComponentFixture<NavbarSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
