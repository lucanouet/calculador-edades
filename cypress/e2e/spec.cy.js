/// <reference types="Cypress" />

const URL =  '127.0.0.1:8080'

context('culculadorEdades', () =>{
  before(()=>{
    cy.visit(URL)
  })

  it('test', ()=>{
    cy.get('#cantidad-integrantes').type(2)
    cy.get('#siguiente-paso').click()
    cy.get('.integrante input').eq(0).type(2)
    cy.get('.integrante input').eq(1).type(4)
    cy.get('#calcular').click()

    cy.get('#mayor-edad').should('have.text', '4')
    cy.get('#menor-edad').should('have.text', '2')
    cy.get('#promedio-edad').should('have.text', '3.00')

    

    
  })
})



