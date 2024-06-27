import {TestBed } from '@angular/core/testing';

import { JsonService } from './json.service'; 

describe('RegistroComponent', () => {
  let service : JsonService;

  beforeEach(async () => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(JsonService);

  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
