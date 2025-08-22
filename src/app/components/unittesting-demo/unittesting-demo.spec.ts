import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnittestingDemo } from './unittesting-demo';

describe('UnittestingDemo', () => { // Test Suite
  let component: UnittestingDemo;
  let fixture: ComponentFixture<UnittestingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnittestingDemo]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UnittestingDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { // // Test Case-1
    expect(component).toBeTruthy();
  });

  it('should verify add method', () => { // // Test Case-2
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(10, 20)).not.toBe(-30);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(10, -20)).toBe(-10);
    expect(component.add(-10, -20)).toBe(-30);
  });
  it('should verify addNewCar method', () => { // // Test Case-2
    expect(component.cars).not.toBeUndefined();
    expect(component.cars.length).toBe(2);
    expect(component.cars).toEqual(['Tata', 'Honda']);
    component.addNewCar('Maruti');
    expect(component.cars).not.toBeUndefined();
    expect(component.cars.length).toBe(3);
    expect(component.cars).toEqual(['Tata', 'Honda', 'Maruti']);
  });
});
