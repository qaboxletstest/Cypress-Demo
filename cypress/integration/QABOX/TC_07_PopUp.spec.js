describe('Pop Up Test Suite', () => {
    before(() => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/differentalerttypes.html')
    });

    it.only('Alert - First Way', () => {
        
        cy.get('button#alert').click()
    });

    it('Alert - Second Way - Multiple Alerts', () => {
    
        cy.get('button#miltiplealert').click()
            
    });

    it('Confirm - First Way', () => {
        cy.on('window:confirm', confirmTxt => {
            expect(confirmTxt).to.eql('I\'m a Confirm Box');
            // return true
        })
        cy.get('button#confirm').click()
    });

    it('Confirm - Second Way', () => {
        
        cy.get('button#confirm').click()
    });

    it('Prompt', () => {
        
        cy.get('button#prompt').click()
    });

    it('Custom Pop Up Dialog from hidden fields', () => {
        cy.get('button#cusdiag').click()
        cy.get('input#name').type('UserName')
        cy.get('input#password').type('Password')
        cy.contains('Submit').click()
    });

    it('Custom Pop Up Dialog from function', () => {
        cy.get('button#moddiag').click()
        // cy.contains('Ok').click()
        cy.contains('Close').click()
    });

    it('Window pop up', () => {
        const pop_url = "https://www.youtube.com/c/qaboxletstest/"
        
        cy.get('button#winpop').click()
        
    });
});