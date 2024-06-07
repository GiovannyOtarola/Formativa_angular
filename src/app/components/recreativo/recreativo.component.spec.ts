import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreativoComponent } from './recreativo.component';

describe('RecreativoComponent', () => {
  let component: RecreativoComponent;
  let fixture: ComponentFixture<RecreativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecreativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecreativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
