import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileScreenPage } from './profile-screen.page';

describe('ProfileScreenPage', () => {
  let component: ProfileScreenPage;
  let fixture: ComponentFixture<ProfileScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
