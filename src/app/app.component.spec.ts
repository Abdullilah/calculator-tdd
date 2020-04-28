import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const oldResetTestingModule = TestBed.resetTestingModule;

  beforeAll(async done =>
    (async () => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
      }).compileComponents();
      await TestBed.compileComponents();

      // Prevent Angular from resetting testing module.
      TestBed.resetTestingModule = () => TestBed;
    })()
      .then(done)
      .catch(done.fail),
  );

  afterAll(() => {
    // Reinstate resetTestingModule method.
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('after initialization', () => {
    it('should set the initial values', () => {
      expect(component.number1).toBe(0);
      expect(component.number2).toBe(0);
      expect(component.result).toBe(0);
      expect(component.operation).toBe('');
    });
  });

  describe('summation()', () => {
    it('should call the isValidNumbers function', () => {
      spyOn(component, 'isValidNumbers');

      component.subtraction(5, 9);
      expect(component.isValidNumbers).toHaveBeenCalledWith(5, 9);
    });

    it('should calculate the summation of two numbers', () => {
      expect(component.summation(5, 9)).toBe(14);
      expect(component.summation(-5, -9)).toBe(-14);
      expect(component.summation(5, -9)).toBe(-4);
      expect(component.summation(-5, 9)).toBe(4);
      expect(component.summation(null, 9)).toBe(null);
      expect(component.summation(5, null)).toBe(null);
      expect(component.summation(null, null)).toBe(null);
      expect(component.summation(undefined, 9)).toBe(null);
      expect(component.summation(5, undefined)).toBe(null);
      expect(component.summation(undefined, undefined)).toBe(null);
    });
  });

  describe('subtraction()', () => {
    it('should call the isValidNumbers function', () => {
      spyOn(component, 'isValidNumbers');

      component.subtraction(5, 9);
      expect(component.isValidNumbers).toHaveBeenCalledWith(5, 9);
    });

    it('should calculate the subtraction of two numbers', () => {
      expect(component.subtraction(5, 9)).toBe(-4);
      expect(component.subtraction(-5, -9)).toBe(4);
      expect(component.subtraction(5, -9)).toBe(14);
      expect(component.subtraction(-5, 9)).toBe(-14);
      expect(component.subtraction(null, 9)).toBe(null);
      expect(component.subtraction(5, null)).toBe(null);
      expect(component.subtraction(null, null)).toBe(null);
      expect(component.subtraction(undefined, 9)).toBe(null);
      expect(component.subtraction(5, undefined)).toBe(null);
      expect(component.subtraction(undefined, undefined)).toBe(null);
    });
  });

  describe('multiplication()', () => {
    it('should call the isValidNumbers function', () => {
      spyOn(component, 'isValidNumbers');

      component.subtraction(5, 9);
      expect(component.isValidNumbers).toHaveBeenCalledWith(5, 9);
    });

    it('should calculate the multiplication of two numbers', () => {
      expect(component.multiplication(5, 9)).toBe(45);
      expect(component.multiplication(-5, -9)).toBe(45);
      expect(component.multiplication(5, -9)).toBe(-45);
      expect(component.multiplication(-5, 9)).toBe(-45);
      expect(component.multiplication(null, 9)).toBe(null);
      expect(component.multiplication(5, null)).toBe(null);
      expect(component.multiplication(null, null)).toBe(null);
      expect(component.multiplication(undefined, 9)).toBe(null);
      expect(component.multiplication(5, undefined)).toBe(null);
      expect(component.multiplication(undefined, undefined)).toBe(null);
    });
  });

  describe('division()', () => {
    it('should call the isValidNumbers function', () => {
      spyOn(component, 'isValidNumbers');

      component.subtraction(5, 9);
      expect(component.isValidNumbers).toHaveBeenCalledWith(5, 9);
    });

    it('should calculate the division of two numbers', () => {
      expect(component.division(5, 9)).toBe(0.5555555555555556);
      expect(component.division(-5, -9)).toBe(0.5555555555555556);
      expect(component.division(5, -9)).toBe(-0.5555555555555556);
      expect(component.division(-5, 9)).toBe(-0.5555555555555556);
      expect(component.division(8, 2)).toBe(4);
      expect(component.division(8, 0)).toEqual(null);
      expect(component.division(null, 9)).toBe(null);
      expect(component.division(5, null)).toBe(null);
      expect(component.division(null, null)).toBe(null);
      expect(component.division(undefined, 9)).toBe(null);
      expect(component.division(5, undefined)).toBe(null);
      expect(component.division(undefined, undefined)).toBe(null);
    });
  });

  describe('isValidNumbers()', () => {
    it('should check if the inputs are numbers', () => {
      expect(component.isValidNumbers(5, 9)).toBe(true);
      expect(component.isValidNumbers(-5, -9)).toBe(true);
      expect(component.isValidNumbers(5, -9)).toBe(true);
      expect(component.isValidNumbers(-5, 9)).toBe(true);
      expect(component.isValidNumbers(5.1234, 9.1233)).toBe(true);
      expect(component.isValidNumbers(5, null)).toBe(false);
      expect(component.isValidNumbers(null, 9)).toBe(false);
      expect(component.isValidNumbers(null, null)).toBe(false);
      expect(component.isValidNumbers(5, undefined)).toBe(false);
      expect(component.isValidNumbers(undefined, 9)).toBe(false);
      expect(component.isValidNumbers(undefined, undefined)).toBe(false);
    });
  });

  describe('calculate()', () => {
    it('should call the summation function', () => {
      spyOn(component, 'summation').and.returnValue(14);

      component.number1 = 5;
      component.number2 = 9;
      component.operation = '+';
      component.calculate();
      expect(component.summation).toHaveBeenCalled();
      expect(component.result).toBe(14);
    });

    it('should call the summation function', () => {
      spyOn(component, 'subtraction').and.returnValue(-4);

      component.number1 = 5;
      component.number2 = 9;
      component.operation = '-';
      component.calculate();
      expect(component.subtraction).toHaveBeenCalled();
      expect(component.result).toBe(-4);
    });

    it('should call the summation function', () => {
      spyOn(component, 'multiplication').and.returnValue(45);

      component.number1 = 5;
      component.number2 = 9;
      component.operation = '*';
      component.calculate();
      expect(component.multiplication).toHaveBeenCalled();
      expect(component.result).toBe(45);
    });

    it('should call the summation function', () => {
      spyOn(component, 'division').and.returnValue(0.5555555555555556);

      component.number1 = 5;
      component.number2 = 9;
      component.operation = '/';
      component.calculate();
      expect(component.division).toHaveBeenCalled();
      expect(component.result).toBe(0.5555555555555556);
    });

    it('should not call any function', () => {
      spyOn(component, 'summation');
      spyOn(component, 'subtraction');
      spyOn(component, 'multiplication');
      spyOn(component, 'division');

      component.operation = '&';
      component.calculate();
      expect(component.summation).not.toHaveBeenCalled();
      expect(component.subtraction).not.toHaveBeenCalled();
      expect(component.multiplication).not.toHaveBeenCalled();
      expect(component.division).not.toHaveBeenCalled();
    });
  });

  describe('applyOperation()', () => {
    it('should select the mathematical operation as summation', () => {
      component.applyOperation('+');
      expect(component.operation).toBe('+');
    });

    it('should select the mathematical operation as subtraction', () => {
      component.applyOperation('-');
      expect(component.operation).toBe('-');
    });

    it('should select the mathematical operation as multiplication', () => {
      component.applyOperation('*');
      expect(component.operation).toBe('*');
    });

    it('should select the mathematical operation as division', () => {
      component.applyOperation('/');
      expect(component.operation).toBe('/');
    });

    it('should select the mathematical operation as empty string', () => {
      component.applyOperation('&');
      expect(component.operation).toBe('');
    });
  });

  describe('clearAll()', () => {
    it('should rest both inputs and the operation', () => {
      component.clearAll();
      expect(component.number1).toBe(0);
      expect(component.number2).toBe(0);
      expect(component.result).toBe(0);
      expect(component.operation).toBe('');
    });
  });
});
