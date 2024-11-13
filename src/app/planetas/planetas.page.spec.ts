import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetasPage } from './planetas.page';

describe('PlanetasPage', () => {
  let component: PlanetasPage;
  let fixture: ComponentFixture<PlanetasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
