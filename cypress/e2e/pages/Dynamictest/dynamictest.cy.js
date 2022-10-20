
///<reference types="Cypress"/>

it("Dynamic test button", ()=>{

cy.visit("http://uitestingplayground.com/")
cy.get(':nth-child(1) > :nth-child(1) > h3 > a').click()

cy.contains('Button with Dynamic ID').click()

})

it('class attribute', ()=>{
    
    cy.visit("http://uitestingplayground.com/")
    cy.get(':nth-child(1) > :nth-child(2) > h3 > a').click()

    cy.get('.btn-primary',{timeout:10000}).click()
})

it('hidden layers', ()=>{
    cy.visit("http://uitestingplayground.com/")
    cy.get(':nth-child(1) > :nth-child(3) > h3 > a').click()
    cy.get('.btn-success').click()
 
    cy.get('.btn-success',{timeout:10000}).click({force:true})
})



it('Load Delay',()=>{
    cy.visit("http://uitestingplayground.com/")
    cy.get(':nth-child(2) > :nth-child(1) > h3 > a').click()
    cy.get('.btn-primary').click()
    cy.wait(15000)
    cy.get('.bg-success').click()
})



it('Client side delay',()=>{

    cy.visit("http://uitestingplayground.com/")
    cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
    cy.get('.btn-primary').click()
    cy.wait(15000)
    cy.get('.bg-success').click()

})



it('Click',()=>{
    cy.visit("http://uitestingplayground.com/")
    cy.get(':nth-child(2) > :nth-child(3) > h3 > a').click()
    cy.get('#badButton').click()
    cy.get('#badButton')
    .should('have.css', 'background-color')
    .and('eq', 'rgb(40, 167, 69)')

})

it('Text Input',()=>{

    cy.visit("http://uitestingplayground.com/")
    cy.get(':nth-child(2) > :nth-child(4) > h3 > a').click()
    cy.get('#newButtonName').type('hello')
    cy.get('#updatingButton').click()
})

it('Scrollbars',()=>{

    cy.visit("http://uitestingplayground.com/")
    cy.get(':nth-child(3) > :nth-child(1) > h3 > a').click()
    cy.get('[style="height:300px;width:600px"] > div').scrollIntoView({ offset: { top: 150, left: 200 } })
    cy.get('#hidingButton').click()
    
})


it('Dynamic Table',()=>{

      cy.visit("http://uitestingplayground.com/")
      cy.get(':nth-child(3) > :nth-child(2) > h3 > a').click()
      cy.get('[role="row"] > [role="cell"]').should('have.text','Chrome')
     
    })

it('Verify Text',()=>{

  cy.visit("http://uitestingplayground.com/")
  cy.get(':nth-child(3) > :nth-child(3) > h3 > a').click()
  cy.contains('span[class="badge-secondary"]','Welcome UserName')
})


it('Verify Text',()=>{

  cy.visit("http://uitestingplayground.com/")
  cy.get(':nth-child(3) > :nth-child(4) > h3 > a').click()

  
  cy.get('#startButton').click()
  cy.get('#progressBar').contains()
})

it('Verify Text',()=>{

  cy.visit("http://uitestingplayground.com/")
  cy.get(':nth-child(4) > :nth-child(1) > h3 > a').click()
  cy.get("selector_for_your_button").then($button => {
    if ($button.is(':visible')){
      //you get here only if button is visible
    }
  })


})