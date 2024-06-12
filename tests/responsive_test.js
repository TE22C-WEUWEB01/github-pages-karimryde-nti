describe('Responsivitetstest', () => {
    it('Ska visa korrekt layout på olika enheter', () => {
      cy.viewport('iphone-6') // Simulera en iPhone 6-skärm
      cy.visit('/') // Besök startsidan
      // Kontrollera att vissa element är synliga och korrekt placerade
      cy.get('header').should('be.visible')
      cy.get('nav').should('be.visible')
      cy.get('footer').should('be.visible')
  
      cy.viewport('ipad-2') // Simulera en iPad 2-skärm
      cy.reload() // Ladda om sidan för att applicera nya viewport
      // Kontrollera att andra element är synliga och korrekt placerade
      cy.get('header').should('be.visible')
      cy.get('nav').should('be.visible')
      cy.get('footer').should('be.visible')
  
      // Fortsätt med andra testfall för andra enheter och layouter...
    })
  })
  