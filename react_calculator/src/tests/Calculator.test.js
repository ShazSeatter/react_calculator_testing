import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let equalButton;
  beforeEach(() => {
    container = render(<Calculator/>)
    equalButton = container.getByTestId('operator-equals');
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  }); 

  it('should add two numbers together and get a new total', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const addButton = container.getByTestId('operator-add');
    fireEvent.click(addButton);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(equalButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract two numbers and get new total', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtractButton = container.getByTestId('operator-subtract');
    fireEvent.click(subtractButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(equalButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should multiply two numbers and get new total', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiplyButton = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyButton);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(equalButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');

  })

  it('should divide numbers and get new total', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divideButton = container.getByTestId('operator-divide');
    fireEvent.click(divideButton);
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7);
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(equalButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number buttons clicks', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('217');
  })

  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const addButton = container.getByTestId('operator-add');
    fireEvent.click(addButton);
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    const subtractButton = container.getByTestId('operator-subtract');
    fireEvent.click(subtractButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(equalButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('6');
  })

  it('should clear running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const addButton = container.getByTestId('operator-add');
    fireEvent.click(addButton);
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    equalButton = container.getByTestId('operator-equals');
    fireEvent.click(equalButton);
    const clearButton = container.getByTestId('clear')
    fireEvent.click(clearButton)
    const subtractButton = container.getByTestId('operator-subtract');
    fireEvent.click(subtractButton);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    equalButton = container.getByTestId('operator-equals');
    fireEvent.click(equalButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('9');
  })
})
