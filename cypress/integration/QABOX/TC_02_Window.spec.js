describe('Window Test Suite Commands', () => {

    before(() => {
        cy.visit('#/login?_k=k4oq8m')
    });

    it('Window Test Commands - URI Properties', () => {
        cy.window().should(win => {
            const loc = win.location
            expect(loc.hash).to.eql('#/login?_k=k4oq8m');
            expect(loc.host).to.eql('react-redux.realworld.io');
            expect(loc.pathname).to.eql('/');
            expect(loc.protocol).to.eql('https:');
        })
    });

    it('Window Test Commands - Page Reload', () => {
        cy.window().should(win => {
            win.location.reload()
        })
    });

    it('Window Test Commands - Page Navigation', () => {
        cy.contains('Sign up').click()
        cy.window().should(win => {
            win.history.back() // win.history.go(-1)
        })
        cy.contains('Need an account?').should('be.visible')
        cy.window().should(win => {
            win.history.forward() // win.history.go(1)
        })
        cy.contains('Have an account?').should('be.visible')
    });

    it('Window Test Commands - Storage', () => {
        cy.window().should(win => {
            expect(win.localStorage.length).to.eql(0);
            win.localStorage.setItem('Name', 'QA BOX LET\'S TEST')
            expect(win.localStorage.getItem('Name')).to.eql('QA BOX LET\'S TEST');
        })
    });

    it('CY Test Commands - URI Properties', () => {
        cy.hash().should('eq', '#/login?_k=k4oq8m')
        cy.location('host').should('eq', 'react-redux.realworld.io')
        cy.location('pathname').should('eq', '/')
        cy.location('protocol').should('eq', 'https:')
    });

    it('CY Test Commands - Page Reload', () => {
        cy.reload()
    });

    it('CY Test Commands - Page Navigation', () => {
        cy.contains('Sign up').click()
        cy.go('back') // cy.go(-1)
        cy.contains('Need an account?').should('be.visible')
        cy.go('forward') // cy.go(1)
        cy.contains('Have an account?').should('be.visible')
    });

    it.only('Window Test Commands - Storage', () => {
        cy.clearLocalStorage()
    });
});