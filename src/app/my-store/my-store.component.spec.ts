import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoreComponent } from './my-store.component';

describe('MyStoreComponent', () => {
  let component: MyStoreComponent;
  let fixture: ComponentFixture<MyStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStoreComponent]
    });
    fixture = TestBed.createComponent(MyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
