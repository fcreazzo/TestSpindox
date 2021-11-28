import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataIconComponent } from './user-data-icon.component';

describe('UserDataIconComponent', () => {
  let component: UserDataIconComponent;
  let fixture: ComponentFixture<UserDataIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
