describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });


  it('should update the display of running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click(); 
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('have.html', '6');
  });


  it('should be able to add', () => {
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '10')
  })

  it('should be able to subtract', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '6')
  })

  it('should be able to multiply', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '16')
  })

  it('should be able to divide', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '4')
  })

  it('should be able to do multiple calculated operations', () => {
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '9')
  })

  it('should display decimal numbers in running total', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '2.6666666666666665')
  })

  it('should display positive number in running total', () => {
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '10')
  })

  it('should display negative number in running total', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '-2')
  })

  it('should display a very large number in the running total', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('have.html', '2000000000')
  })
})


// ### UI Integration Tests

// You need to write front-end integration tests to ensure the Calculator model and browser UI are working to meet the user requirements. The framework provided to do this is Cypress. There is one sample test written in `/cypress/e2e/calculator.cy.js` and you should continue writing your tests in this file.

// You should write tests to ensure the following requirements are met:

// 1. Do the number buttons update the display of the running total?
// 2. Do the arithmetical operations update the display with the result of the operation?
// 3. Can multiple operations be chained together?
// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)? 
// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).