import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogicComponent } from './blogic.component';

describe('BlogicComponent', () => {
  let component: BlogicComponent;
  let fixture: ComponentFixture<BlogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
