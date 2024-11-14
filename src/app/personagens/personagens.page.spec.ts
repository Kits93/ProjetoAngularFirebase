import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonagensPage } from './personagens.page';

describe('PersonagensPage', () => {
  let component: PersonagensPage;
  let fixture: ComponentFixture<PersonagensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
