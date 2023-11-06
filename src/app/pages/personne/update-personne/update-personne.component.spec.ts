import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonneComponent } from './update-personne.component';

describe('UpdatePersonneComponent', () => {
  let component: UpdatePersonneComponent;
  let fixture: ComponentFixture<UpdatePersonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePersonneComponent]
    });
    fixture = TestBed.createComponent(UpdatePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
