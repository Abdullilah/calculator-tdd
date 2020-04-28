import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public number1;
  public number2;
  public result;
  public operation;

  public summation(number1: number, number2: number): number {
    return null;
  }

  public subtraction(number1: number, number2: number): number {
    return null;
  }

  public multiplication(number1: number, number2: number): number {
    return null;
  }

  public division(number1: number, number2: number): number {
    return null;
  }

  public isValidNumbers(number1: number, number2: number): boolean {
    return null;
  }

  public calculate(): void {
  }

  public applyOperation(operation: string): void {
  }

  public clearAll(): void {
  }
}
