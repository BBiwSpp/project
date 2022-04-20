import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsClubsComponent } from './groups-clubs.component';

describe('GroupsClubsComponent', () => {
  let component: GroupsClubsComponent;
  let fixture: ComponentFixture<GroupsClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
